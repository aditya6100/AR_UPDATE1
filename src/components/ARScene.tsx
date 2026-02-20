import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createWalls } from './Walls';
import type { FloorData } from '../data/floorTypes';
import type { PathSegment } from '../utils/multiFloorPathfinding';

interface ArrowElement {
  cone: THREE.Mesh;
  shaft: THREE.Mesh;
  ring: THREE.Mesh;
  coneGeo: THREE.ConeGeometry;
  coneMat: THREE.MeshPhysicalMaterial;
  shaftGeo: THREE.CylinderGeometry;
  shaftMat: THREE.MeshPhysicalMaterial;
  ringGeo: THREE.RingGeometry;
  ringMat: THREE.MeshBasicMaterial;
}

interface ARSceneProps {
  floorData: FloorData;
  activeSegment: PathSegment | null;
  startRoomId: string | null;
  endRoomId: string | null;
  onSessionStateChange?: (active: boolean) => void;
  showARButton: boolean;
  showUIView: boolean;
}

export default function ARScene({ floorData, activeSegment, startRoomId, endRoomId, onSessionStateChange, showARButton, showUIView }: ARSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const floorPlanGroupRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const spheresRef = useRef<ArrowElement[]>([]);
  const destinationBeaconRef = useRef<THREE.Group | null>(null);
  const lineRef = useRef<THREE.Line | null>(null);
  const animationIndexRef = useRef(0);
  const curvePointsGlobalRef = useRef<THREE.Vector3[]>([]);
  const pathCurveRef = useRef<THREE.CatmullRomCurve3 | null>(null);
  const arButtonRef = useRef<HTMLElement | null>(null);
  const wallGroupRef = useRef<THREE.Group | null>(null);
  const floorMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const labelsGroupRef = useRef<THREE.Group | null>(null);
  const floorRef = useRef<THREE.Mesh | null>(null);
  const startRoomRef  = useRef(startRoomId);
  const endRoomIdRef  = useRef(endRoomId);
  
  const [isFarView, setIsFarView] = useState(false);


  useEffect(() => {
    console.log("isFarView changed:", isFarView);
    if (cameraRef.current && controlsRef.current) {
      const targetY = isFarView ? 70 : 38;
      cameraRef.current.position.y = targetY;
      controlsRef.current.update();
    }
  }, [isFarView]);

  useEffect(() => {
    startRoomRef.current = startRoomId ?? '';
    endRoomIdRef.current  = endRoomId  ?? '';
  }, [startRoomId, endRoomId]);

  // When floorData prop changes (user switches floor): rebuild walls + labels
  useEffect(() => {
    if (!floorPlanGroupRef.current) return;

    // Clear old walls
    if (wallGroupRef.current) {
      floorPlanGroupRef.current.remove(wallGroupRef.current);
      wallGroupRef.current.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          ((child as THREE.Mesh).material as THREE.Material).dispose();
        }
      });
    }
    // Clear old labels
    if (labelsGroupRef.current) {
      floorPlanGroupRef.current.remove(labelsGroupRef.current);
      labelsGroupRef.current.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          ((child as THREE.Mesh).material as THREE.Material).dispose();
        }
      });
    }
    // Clear path arrows
    spheresRef.current.forEach(e => {
      floorPlanGroupRef.current!.remove(e.cone, e.shaft);
      e.cone.geometry.dispose(); e.shaft.geometry.dispose();
    });
    spheresRef.current = [];
    animationIndexRef.current = 0;
    curvePointsGlobalRef.current = [];
    pathCurveRef.current = null;

    // Rebuild for new floor
    const { wallGroup } = createWalls(floorData);
    floorPlanGroupRef.current.add(wallGroup);
    wallGroupRef.current = wallGroup;

    const newLabels = new THREE.Group();
    labelsGroupRef.current = newLabels;
    floorPlanGroupRef.current.add(newLabels);
    drawRoomLabels(newLabels);

    // Redraw floor plane
    if (floorRef.current) {
      floorPlanGroupRef.current.remove(floorRef.current);
    }
    drawFloor(floorPlanGroupRef.current, wallGroup);

    // Redraw path if applicable (clears if activeSegment is null)
    if (floorPlanGroupRef.current) {
      drawPath(activeSegment, floorPlanGroupRef.current);
    }
  }, [floorData, activeSegment]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    scene.fog = new THREE.Fog(0x0f0f1e, 10, 60);
    sceneRef.current = scene;

    const floorPlanGroup = new THREE.Group();
    floorPlanGroupRef.current = floorPlanGroup;
    scene.add(floorPlanGroup);

    const labelsGroup = new THREE.Group();
    labelsGroupRef.current = labelsGroup;
    floorPlanGroup.add(labelsGroup);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 50);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Required for AR: transparent background so camera feed shows through
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    renderer.xr.enabled = true;
    rendererRef.current = renderer;

    // 'local-floor' places origin at floor level — essential for ground-level arrows
    const arButton = ARButton.createButton(renderer, {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['dom-overlay', 'dom-overlay-for-handheld-ar'],
      domOverlay: { root: document.body },
    });
    arButtonRef.current = arButton;
    containerRef.current.appendChild(arButton);

    // --- NEW LIGHTING SETUP ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -20;
    
    scene.add(directionalLight);

    const accentLight1 = new THREE.PointLight(0xa78bfa, 0.5);
    accentLight1.position.set(-10, 10, -10);
    accentLight1.castShadow = true;
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0xC792EA, 0.5); // Changed to light purple
    accentLight2.position.set(10, 10, 10);
    accentLight2.castShadow = true;
    scene.add(accentLight2);
    // --- END NEW LIGHTING SETUP ---

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;

    // --- NEW WALL RENDERING (active floor) ---
    // floorData comes from props
    const { wallGroup } = createWalls(floorData);
    floorPlanGroup.add(wallGroup);
    wallGroupRef.current = wallGroup;

    renderer.xr.addEventListener('sessionstart', () => {
      if (onSessionStateChange) onSessionStateChange(true);

      const group = floorPlanGroupRef.current;
      if (!group) return;

      // ── Scale the floor plan group to real-world metres ────────────────
      // Set to 2.0 for 1:1 scale (if 1.5 only reached Lab 10).
      const AR_SCALE = 2.0;
      group.scale.set(AR_SCALE, AR_SCALE, AR_SCALE);

      // ── Position & Rotation: Align path to start in front of user ──────
      if (activeSegment && activeSegment.positions.length >= 2) {
        const p1 = activeSegment.positions[0];
        const p2 = activeSegment.positions[1];

        // 1. Calculate the angle of the first path segment
        const dx = p2[0] - p1[0];
        const dz = p2[1] - p1[1];
        const pathAngle = Math.atan2(dx, dz);

        // 2. Rotation: Using the current 'perfect' baseline
        group.rotation.set(0, -pathAngle, 0);

        // 3. Position: Place first waypoint (p1) exactly at user's feet (origin)
        const p1Vec = new THREE.Vector3(p1[0], 0, p1[1]).multiplyScalar(AR_SCALE);
        p1Vec.applyAxisAngle(new THREE.Vector3(0, 1, 0), group.rotation.y);
        
        group.position.set(-p1Vec.x, 0, -p1Vec.z);
      } else {
        // Fallback if no path: place start room at origin
        const startRoomObj = floorData.rooms.find(r => r.id === startRoomRef.current);
        if (startRoomObj?.connectedTo?.[0]) {
          const startWp = floorData.waypoints.find(w => w.id === startRoomObj.connectedTo[0]);
          if (startWp) {
            group.position.set(-startWp.position[0] * AR_SCALE, 0, -startWp.position[1] * AR_SCALE);
          }
        }
      }

      // ── Hide walls, floor, labels (show only arrows in AR) ─────────────
      if (labelsGroupRef.current) labelsGroupRef.current.visible = false;
      if (floorRef.current)       floorRef.current.visible       = false;

      if (wallGroupRef.current) {
        wallGroupRef.current.visible = false;
      }

      // ── Make arrows larger & brighter for AR ───────────────────────────
      // Rebuild arrows at AR scale if path already exists
      if (activeSegment && floorPlanGroupRef.current) {
        drawPath(activeSegment, floorPlanGroupRef.current);
      }

      // Ensure all arrows are visible
      spheresRef.current.forEach(arrow => {
        arrow.cone.visible  = true;
        arrow.shaft.visible = true;
        arrow.ring.visible  = true;
      });
      if (lineRef.current) lineRef.current.visible = false;
    });

    renderer.xr.addEventListener('sessionend', () => {
      if (onSessionStateChange) onSessionStateChange(false);

      const group = floorPlanGroupRef.current;
      if (!group) return;

      // ── Restore 3D view scale and position ─────────────────────────────
      group.scale.set(1, 1, 1);
      group.position.set(0, 0, 0);
      group.rotation.set(0, 0, 0);

      // ── Restore visibility ─────────────────────────────────────────────
      if (labelsGroupRef.current) labelsGroupRef.current.visible = true;
      if (floorRef.current)       floorRef.current.visible       = true;
      if (wallGroupRef.current)   wallGroupRef.current.visible   = true;
      if (lineRef.current)        lineRef.current.visible        = false;

      // Rebuild arrows at 3D scale
      if (activeSegment && group) {
        drawPath(activeSegment, group);
      }
    });

    drawFloor(floorPlanGroup, wallGroup);
    drawRoomLabels(labelsGroup);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
        controls.update();

        // Animate existing arrows — float + pulse glow
        const time = performance.now() * 0.001;
        spheresRef.current.forEach((entry, i) => {
            const { cone, shaft, ring } = entry;
            const floatOffset = Math.sin(time * 2 + i * 0.4) * 0.04;
            if (cone.userData.baseY  !== undefined) cone.position.y  = cone.userData.baseY  + floatOffset;
            if (shaft.userData.baseY !== undefined) shaft.position.y = shaft.userData.baseY + floatOffset;
            if (ring.userData.baseY  !== undefined) ring.position.y  = ring.userData.baseY;

            const pulse = 1.8 + Math.sin(time * 3 + i) * 0.7;
            [cone, shaft].forEach(mesh => {
                const mat = mesh.material as THREE.MeshStandardMaterial;
                if (mat.emissive !== undefined) mat.emissiveIntensity = pulse;
            });

            const scale = 1 + Math.sin(time * 2 + i) * 0.04;
            cone.scale.set(scale, scale, scale);
            shaft.scale.set(scale, scale, scale);
        });

        // Animate destination beacon
        if (destinationBeaconRef.current) {
          const gem = destinationBeaconRef.current.children[3]; // Octahedron
          if (gem) {
            gem.rotation.y += 0.02;
            gem.position.y = 5.5 + Math.sin(time * 2) * 0.3;
          }
          const outerRing = destinationBeaconRef.current.children[1]; // Outer ring
          if (outerRing) {
            outerRing.rotation.z += 0.01;
            outerRing.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
          }
        }

        renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
      renderer.dispose();
      controls.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (containerRef.current && arButton.parentNode) {
        containerRef.current.removeChild(arButton);
      }
    };
  }, []);

  useEffect(() => {
    if (floorPlanGroupRef.current) {
      drawPath(activeSegment, floorPlanGroupRef.current);
    }
  }, [activeSegment]);

  useEffect(() => {
    if (arButtonRef.current) {
      arButtonRef.current.style.display = showARButton ? 'block' : 'none';
    }
  }, [showARButton]);

  const drawFloor = (floorPlanGroup: THREE.Group, wallGroup: THREE.Group) => {
    // Calculate the bounding box of the walls to size the floor accordingly
    const boundingBox = new THREE.Box3().setFromObject(wallGroup);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);

    const padding = 4; // Add some padding around the model
    const floorGeo = new THREE.PlaneGeometry(size.x + padding, size.z + padding);
    const floorMat = new THREE.MeshStandardMaterial({
      color:0x08080a, // A very dark color to make other elements pop
      roughness: 0.8,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.copy(center);
    floor.position.y = 0; // Ensure floor is at ground level
    floor.receiveShadow = true;
    floorMaterialRef.current = floorMat;
    floorRef.current = floor;
    floorPlanGroup.add(floor);
    if (cameraRef.current && controlsRef.current) {
        cameraRef.current.position.set(center.x, 38, center.z + 0.001);
        controlsRef.current.target.copy(center);
        controlsRef.current.update();
      }
  };

  const drawRoomLabels = (floorPlanGroup: THREE.Group) => {
    if (!floorData) return;
    // Room width in world units — used to scale the label plane so it fits inside the room
    const roomWidths: Record<string, number> = {
      // Floor 1
      principal: 8, admin: 8, conf: 8, lab1: 10, canteen: 12, library: 8, ramp: 4,
      // Floor 2
      hod: 6, dept_lib: 4, server: 6, tutorial: 3.5, lab10: 6, stairs_top: 3,
      lab9: 14, corridor: 20, lift: 3, stairs_bot: 3, lab7: 14, lab8: 5, 
      women: 6, gents: 6,
    };
    // roomDepths: label plane depth in world units
    const roomDepths: Record<string, number> = {
      principal: 6, admin: 6, conf: 6, lab1: 6, canteen: 6, library: 6, ramp: 6,
      hod: 6, dept_lib: 6, server: 6, tutorial: 6, lab10: 6, stairs_top: 6,
      lab9: 6, corridor: 2, lift: 6, stairs_bot: 6, lab7: 6, lab8: 6,
      women: 6, gents: 6,
    };

    floorData.rooms.forEach((room) => {
      if (!room.center) return;

      const suffix = room.id.split('_').slice(1).join('_');
      const rw = roomWidths[suffix] ?? 6;
      const rd = roomDepths[suffix] ?? 7.5;

      // Canvas: fixed resolution, text scaled to fit
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width  = 512;
      canvas.height = 512;

      // Measure text to pick font size
      const maxFontPx = 96;
      const minFontPx = 28;
      let fontSize = maxFontPx;
      context.font = `bold ${fontSize}px Arial`;
      while (context.measureText(room.name).width > canvas.width * 0.88 && fontSize > minFontPx) {
        fontSize -= 4;
        context.font = `bold ${fontSize}px Arial`;
      }

      // For multi-word names, split into lines
      const words = room.name.split(' ');
      const lines: string[] = [];
      if (words.length > 1 && context.measureText(room.name).width > canvas.width * 0.85) {
        // Try 2-line split
        const mid = Math.ceil(words.length / 2);
        lines.push(words.slice(0, mid).join(' '));
        lines.push(words.slice(mid).join(' '));
        // Adjust font so both lines fit
        for (const l of lines) {
          while (context.measureText(l).width > canvas.width * 0.88 && fontSize > minFontPx) {
            fontSize -= 4;
            context.font = `bold ${fontSize}px Arial`;
          }
        }
      } else {
        lines.push(room.name);
      }

      const lineH = fontSize * 1.25;
      const totalTextH = lines.length * lineH;

      // Dark semi-transparent background
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'rgba(8, 8, 18, 0.82)';
      const rx = 32;
      context.beginPath();
      context.moveTo(rx, 0);
      context.lineTo(canvas.width - rx, 0);
      context.quadraticCurveTo(canvas.width, 0, canvas.width, rx);
      context.lineTo(canvas.width, canvas.height - rx);
      context.quadraticCurveTo(canvas.width, canvas.height, canvas.width - rx, canvas.height);
      context.lineTo(rx, canvas.height);
      context.quadraticCurveTo(0, canvas.height, 0, canvas.height - rx);
      context.lineTo(0, rx);
      context.quadraticCurveTo(0, 0, rx, 0);
      context.closePath();
      context.fill();

      // Border
      context.strokeStyle = 'rgba(199, 146, 234, 0.85)';
      context.lineWidth = 8;
      context.stroke();

      // Draw text lines centered
      context.font = `bold ${fontSize}px Arial`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.shadowColor = 'rgba(199, 146, 234, 1)';
      context.shadowBlur = 24;
      context.fillStyle = '#ffffff';

      const startY = canvas.height / 2 - totalTextH / 2 + lineH / 2;
      lines.forEach((line, i) => {
        context.fillText(line, canvas.width / 2, startY + i * lineH);
      });
      // Second pass — brighter core
      context.shadowBlur = 10;
      context.fillStyle = '#eedeff';
      lines.forEach((line, i) => {
        context.fillText(line, canvas.width / 2, startY + i * lineH);
      });

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      const labelMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

      // Scale plane to fit inside the room cell (leave a small margin)
      const margin = 0.7;
      const planeW = Math.min(rw - margin, rw * 0.85);
      const planeD = Math.min(rd - margin, rd * 0.75);

      const labelGeometry = new THREE.PlaneGeometry(planeW, planeD);
      const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial);

      labelMesh.position.set(room.center[0], 0.06, room.center[1]);
      labelMesh.rotation.x = -Math.PI / 2;

      floorPlanGroup.add(labelMesh);
    });
  };

  const drawPath = (segment: PathSegment, floorPlanGroup: THREE.Group) => {
    // ── Clear old arrows and beacon ──────────────────────────────────────────
    spheresRef.current.forEach(entry => {
      floorPlanGroup.remove(entry.cone, entry.shaft, entry.ring);
      entry.coneGeo.dispose();  entry.shaftGeo.dispose();  entry.ringGeo.dispose();
      entry.coneMat.dispose();  entry.shaftMat.dispose();  entry.ringMat.dispose();
    });
    spheresRef.current = [];

    if (destinationBeaconRef.current) {
      floorPlanGroup.remove(destinationBeaconRef.current);
      destinationBeaconRef.current.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          ((child as THREE.Mesh).material as THREE.Material).dispose();
        }
      });
      destinationBeaconRef.current = null;
    }

    animationIndexRef.current = 0;
    curvePointsGlobalRef.current = [];
    pathCurveRef.current = null;

    if (lineRef.current) {
      floorPlanGroup.remove(lineRef.current);
      lineRef.current.geometry.dispose();
      (lineRef.current.material as THREE.Material).dispose();
      lineRef.current = null;
    }

    if (!segment || segment.positions.length < 2) return;

    const pathPoints = segment.positions.map(pos => {
      // Y=0.12 — sits just above floor surface, visible in both 3D and AR
      return new THREE.Vector3(pos[0], 0.12, pos[1]);
    });

    if (pathPoints.length < 2) return;

    // ── Build destination beacon ────────────────────────────────────────────
    const endPos = pathPoints[pathPoints.length - 1];
    const beaconGroup = new THREE.Group();
    
    // Glowing base ring
    const torusGeo = new THREE.TorusGeometry(0.8, 0.08, 16, 48);
    const torusMat = new THREE.MeshStandardMaterial({ 
      color: 0x8b5cf6, 
      emissive: 0x8b5cf6, 
      emissiveIntensity: 6 
    });
    const ring = new THREE.Mesh(torusGeo, torusMat);
    ring.rotation.x = -Math.PI / 2;
    beaconGroup.add(ring);

    // Outer rotating ring
    const ring2Geo = new THREE.TorusGeometry(1.2, 0.04, 8, 32);
    const ring2 = new THREE.Mesh(ring2Geo, torusMat);
    ring2.rotation.x = -Math.PI / 2;
    ring2.userData.isRotating = true; // flag for custom animation if needed
    beaconGroup.add(ring2);

    // Glowing beam/pillar (transparent spire)
    const beamGeo = new THREE.CylinderGeometry(0.05, 0.8, 5, 24, 1, true);
    const beamMat = new THREE.MeshStandardMaterial({ 
      color: 0xa78bfa, 
      emissive: 0xa78bfa, 
      emissiveIntensity: 3, 
      transparent: true, 
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.y = 2.5;
    beaconGroup.add(beam);

    // Floating destination "gem"
    const gemGeo = new THREE.OctahedronGeometry(0.4);
    const gemMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xa78bfa, emissiveIntensity: 10 });
    const gem = new THREE.Mesh(gemGeo, gemMat);
    gem.position.y = 5.5;
    beaconGroup.add(gem);

    beaconGroup.position.copy(endPos).setY(0.01);
    floorPlanGroup.add(beaconGroup);
    destinationBeaconRef.current = beaconGroup;

    // ── Build curve ─────────────────────────────────────────────────────────
    const curve = new THREE.CatmullRomCurve3(pathPoints);
    pathCurveRef.current = curve;

    // More curve points = smoother arrow placement
    const TOTAL_PTS = 300;
    const curvePoints = curve.getPoints(TOTAL_PTS);
    curvePointsGlobalRef.current = curvePoints;

    // Glowing path line (visible in 3D view, hidden in AR)
    const lineGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xC792EA, linewidth: 2 });
    const line = new THREE.Line(lineGeo, lineMat);
    line.userData.isPathLine = true;
    floorPlanGroup.add(line);
    lineRef.current = line;

    // ── Place arrows immediately (all at once) ──────────────────────────────
    // Arrow scale:
    //   3D view:  floor plan is ~52 world units wide → arrows at 0.3 units look fine
    //   AR mode:  floorPlanGroup is scaled down (each world unit ≈ 0.05 real metres)
    //             so 0.3 world units = ~1.5cm in AR — still visible on floor
    //   We use larger arrows (0.35 cone height) with very bright emissive so they
    //   are clearly visible in both modes.
    const ARROW_SPACING = 8;  // place one arrow every N curve points
    const isAR = rendererRef.current?.xr.isPresenting ?? false;

    // In AR we want real-world scale arrows (~20cm tall)
    // In 3D view we want proportional arrows relative to the floor plan
    // The floor plan group in AR is positioned at real scale so 1 unit = 1 metre
    // We detect AR and use 0.2 (20cm) vs 0.4 (proportional to 52-unit plan)
    const coneH  = isAR ? 0.15 : 0.40;
    const coneR  = isAR ? 0.06 : 0.12;
    const shaftL = isAR ? 0.10 : 0.28;
    const shaftR = isAR ? 0.02 : 0.04;
    const ringO  = isAR ? 0.06 : 0.14;
    const ringI  = isAR ? 0.03 : 0.09;
    const arrowY = isAR ? 0.005 : 0.12;  // Lowered for AR (was 0.01)

    for (let idx = 0; idx < curvePoints.length; idx += ARROW_SPACING) {
      const pt      = curvePoints[idx].clone();
      pt.y          = arrowY;
      const t       = idx / (curvePoints.length - 1);
      const tangent = curve.getTangent(t).normalize();

      // ── Cone (arrowhead) ────────────────────────────────────────────────
      const coneGeo = new THREE.ConeGeometry(coneR, coneH, 16);
      const coneMat = new THREE.MeshStandardMaterial({
        color: 0xC792EA,
        emissive: 0xC792EA,
        emissiveIntensity: 3.0,
        roughness: 0.2,
        metalness: 0.3,
      });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.position.copy(pt).setY(arrowY + coneH / 2);
      const lookAt = pt.clone().add(tangent);
      cone.lookAt(lookAt.x, arrowY + coneH / 2, lookAt.z);
      cone.rotateX(Math.PI / 2);
      cone.userData.baseY = cone.position.y;

      // ── Shaft ────────────────────────────────────────────────────────────
      const shaftGeo = new THREE.CylinderGeometry(shaftR, shaftR, shaftL, 12);
      const shaftMat = new THREE.MeshStandardMaterial({
        color: 0xC792EA,
        emissive: 0xC792EA,
        emissiveIntensity: 2.5,
        roughness: 0.3,
        metalness: 0.2,
      });
      const shaft = new THREE.Mesh(shaftGeo, shaftMat);
      shaft.position.copy(pt).setY(arrowY + coneH / 2);
      shaft.quaternion.copy(cone.quaternion);
      shaft.translateY(-(coneH / 2 + shaftL / 2));
      shaft.userData.baseY = shaft.position.y;

      // ── Ground ring (glow halo) ──────────────────────────────────────────
      const ringGeo = new THREE.RingGeometry(ringI, ringO, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xC792EA,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.copy(pt).setY(0.01);
      ring.userData.baseY = ring.position.y;

      floorPlanGroup.add(cone, shaft, ring);
      spheresRef.current.push({ cone, shaft, ring, coneGeo, coneMat, shaftGeo, shaftMat, ringGeo, ringMat });
    }
  };

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 z-0" />
      {showUIView && (
        <button
            onClick={() => {
                console.log("Button clicked!");
                setIsFarView(!isFarView)
            }}
            className="fixed top-20 left-6 z-20 bg-white/95 p-3 rounded-full shadow-lg text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Far View"
        >
            {isFarView ? 'Default View' : 'Far View'}
        </button>
      )}
    </>
  );
}