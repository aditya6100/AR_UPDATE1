// =============================================================
// Floor 3 — 2nd Floor (CSE Dept) — FINAL ACCURATE CAD DATA
// Measurements: 1 Unit = 1 Metre
// Total Width: 39.04m | Total Depth: 7.30m
// Origin (0,0) = Bottom-Left Corner of the building
// =============================================================

export const floor3Data = {
  floorId: 'f3',
  floorNumber: 3,
  floorName: "2nd Floor (CSE)",

  // Z-Coordinates:
  // 0.00 -> 2.90: Bottom Rooms
  // 2.90 -> 4.40: Middle Corridor (1.5m wide)
  // 4.40 -> 7.30: Top Rooms
  // Spine at Z = 3.65 (Center of corridor)

  rooms: [
    // --- TOP ROW (Z: 4.40 to 7.30) ---
    { id: "f3_hod",        name: "HOD Cabin",      center: [2.00,  5.85], connectedTo: ["f3_wp_hall_hod"] },
    { id: "f3_dept_lib",   name: "Dept Library",   center: [6.35,  5.85], connectedTo: ["f3_wp_hall_dlib"] },
    { id: "f3_server",     name: "Server Room",    center: [8.40,  5.85], connectedTo: ["f3_wp_hall_server"] },
    { id: "f3_tutorial",   name: "Tutorial Room",  center: [14.54, 5.85], connectedTo: ["f3_wp_hall_tutorial"] },
    { id: "f3_lab10",      name: "Lab 10",         center: [21.54, 5.85], connectedTo: ["f3_wp_hall_lab10"] },
    { id: "f3_stairs_top", name: "Stairs (Top)",   center: [27.25, 5.85], connectedTo: ["f3_wp_hall_stairs_top"] },
    { id: "f3_lab9",       name: "Lab 9",          center: [34.00, 5.85], connectedTo: ["f3_wp_hall_lab9"] },

    // --- BOTTOM ROW (Z: 0.00 to 2.90) ---
    { id: "f3_lift",       name: "Lift",           center: [1.34,  1.45], connectedTo: ["f3_wp_hall_lift"] },
    { id: "f3_stairs_bot", name: "Stairs (Bottom)",center: [3.58,  1.45], connectedTo: ["f3_wp_hall_stairs_bot"] },
    { id: "f3_lab7",       name: "Lab 7",          center: [10.24, 1.45], connectedTo: ["f3_wp_hall_lab7"] },
    { id: "f3_lab8",       name: "Lab 8",          center: [20.50, 1.45], connectedTo: ["f3_wp_hall_lab8"] },
    { id: "f3_women",      name: "Ladies Toilet",  center: [30.29, 1.45], connectedTo: ["f3_wp_hall_women"] },
    { id: "f3_gents",      name: "Gents Toilet",   center: [37.01, 1.45], connectedTo: ["f3_wp_hall_gents"] },
  ],

  waypoints: [
    // Main Corridor Spine (Z=3.65)
    { id: "f3_wp_hall_lift",       position: [1.34,  3.65], connectedTo: ["f3_wp_hall_stairs_bot", "f2_wp_hall_lift", "f4_wp_hall_lift"] },
    { id: "f3_wp_hall_stairs_bot", position: [3.58,  3.65], connectedTo: ["f3_wp_hall_lift", "f3_wp_hall_hod"] },
    { id: "f3_wp_hall_hod",        position: [2.00,  3.65], connectedTo: ["f3_wp_hall_stairs_bot", "f3_wp_hall_dlib"] },
    { id: "f3_wp_hall_dlib",       position: [6.35,  3.65], connectedTo: ["f3_wp_hall_hod", "f3_wp_hall_server"] },
    { id: "f3_wp_hall_server",     position: [8.40,  3.65], connectedTo: ["f3_wp_hall_dlib", "f3_wp_hall_lab7"] },
    { id: "f3_wp_hall_lab7",       position: [10.24, 3.65], connectedTo: ["f3_wp_hall_server", "f3_wp_hall_tutorial"] },
    { id: "f3_wp_hall_tutorial",   position: [14.54, 3.65], connectedTo: ["f3_wp_hall_lab7", "f3_wp_hall_lab8"] },
    { id: "f3_wp_hall_lab8",       position: [20.50, 3.65], connectedTo: ["f3_wp_hall_tutorial", "f3_wp_hall_lab10"] },
    { id: "f3_wp_hall_lab10",      position: [21.54, 3.65], connectedTo: ["f3_wp_hall_lab8", "f3_wp_hall_stairs_top"] },
    { id: "f3_wp_hall_stairs_top", position: [27.25, 3.65], connectedTo: ["f3_wp_hall_lab10", "f3_wp_hall_women"] },
    { id: "f3_wp_hall_women",      position: [30.29, 3.65], connectedTo: ["f3_wp_hall_stairs_top", "f3_wp_hall_lab9"] },
    { id: "f3_wp_hall_lab9",       position: [34.00, 3.65], connectedTo: ["f3_wp_hall_women", "f3_wp_hall_gents"] },
    { id: "f3_wp_hall_gents",      position: [37.01, 3.65], connectedTo: ["f3_wp_hall_lab9"] },
  ],

  walls: [
    // --- OUTER PERIMETER ---
    { p1: [0, 0], p2: [39.04, 0] },    // Bottom Wall
    { p1: [39.04, 0], p2: [39.04, 7.3] }, // Right Wall
    { p1: [39.04, 7.3], p2: [0, 7.3] }, // Top Wall
    { p1: [0, 7.3], p2: [0, 0] },       // Left Wall

    // --- CORRIDOR WALLS (Horizontal) ---
    { p1: [0, 2.9], p2: [39.04, 2.9] }, // Bottom Corridor Edge
    { p1: [0, 4.4], p2: [39.04, 4.4] }, // Top Corridor Edge

    // --- TOP ROW VERTICAL DIVIDERS ---
    { p1: [4.00, 4.4], p2: [4.00, 7.3] }, // HOD | Gap
    { p1: [5.00, 4.4], p2: [5.00, 7.3] }, // Gap | Library
    { p1: [7.70, 4.4], p2: [7.70, 7.3] }, // Library | Server
    { p1: [9.10, 4.4], p2: [9.10, 7.3] }, // Server | Gap
    { p1: [11.54, 4.4], p2: [11.54, 7.3] }, // Gap | Tutorial
    { p1: [17.54, 4.4], p2: [17.54, 7.3] }, // Tutorial | Lab 10
    { p1: [25.54, 4.4], p2: [25.54, 7.3] }, // Lab 10 | Stairs
    { p1: [28.97, 4.4], p2: [28.97, 7.3] }, // Stairs | Lab 9

    // --- BOTTOM ROW VERTICAL DIVIDERS ---
    { p1: [2.68, 0], p2: [2.68, 2.9] }, // Lift | Stairs
    { p1: [4.48, 0], p2: [4.48, 2.9] }, // Stairs | Lab 7
    { p1: [16.00, 0], p2: [16.00, 2.9] }, // Lab 7 | Lab 8
    { p1: [25.00, 0], p2: [25.00, 2.9] }, // Lab 8 | WF
    { p1: [25.60, 0], p2: [25.60, 2.9] }, // WF | WR1
    { p1: [34.98, 0], p2: [34.98, 2.9] }, // WR1 | WR2
  ],

  wallHeight: 2.8,
  wallThickness: 0.15,

  floorMessages: [
    { id: "m1", type: "welcome", text: "WELCOME TO CSE DEPARTMENT", position: [2, 3.65] },
    { id: "m2", type: "quote",   text: "Precision is the Key 🎯", position: [15, 3.65] },
    { id: "m3", type: "utility", text: "LIFT ACCESS 🛗", position: [1.34, 2.9] },
  ],
};
