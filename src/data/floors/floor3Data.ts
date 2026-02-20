// =============================================================
// Floor 3 — CSE Department (2nd Floor)
// Measurements sourced from hand-drawn PDF
// =============================================================

export const floor3Data = {
  floorId: 'f3',
  floorNumber: 3,
  floorName: '2nd Floor (CSE)',

  // ── GREEN CORRIDOR / MIDDLE PORTION POLYGON ───────────────────────────
  corridorPolygon: [
    [ 0.00,  3.20],  // top-left
    [24.54,  3.20],  // corridor top → Lab10 RHS
    [24.54,  2.35],  // step UP
    [27.54,  2.35],  // Stairs box corner
    [27.54,  3.20],  // step back down
    [27.17,  3.20],  // jog right to Lab9
    [38.98,  3.20],  // right edge top
    [38.98,  4.10],  // right edge bottom
    [27.17,  4.10],  // Lab9 boundary
    [ 5.36,  4.10],  // corridor bottom → Stairs RHS
    [ 5.36,  7.30],  // step DOWN column
    [ 0.00,  7.30],  // left building bottom
    [ 0.00,  4.10],  // left wall back up
  ] as [number, number][],

  corridorColor: '#2ecc40',

  rooms: [
    { id: 'f3_hod',        name: 'HOD Cabin',      center: [2.00, 1.60], connectedTo: ['f3_wp_hod'] },
    { id: 'f3_dept_lib',   name: 'Dept Library',   center: [5.35, 1.60], connectedTo: ['f3_wp_lib'] },
    { id: 'f3_server',     name: 'Server Room',    center: [8.62, 1.60], connectedTo: ['f3_wp_server'] },
    { id: 'f3_tutorial',   name: 'Tutorial Room',  center: [13.54, 1.60], connectedTo: ['f3_wp_tutorial'] },
    { id: 'f3_lab10',      name: 'Lab 10',         center: [20.54, 1.60], connectedTo: ['f3_wp_lab10'] },
    { id: 'f3_stairs_top', name: 'Stairs (Top)',   center: [26.04, 1.10], connectedTo: ['f3_wp_stairs_top'] },
    { id: 'f3_lab9',       name: 'Lab 9',          center: [33.15, 3.65], connectedTo: ['f3_wp_lab9'] },
    { id: 'f3_corridor',   name: 'Middle Portion', center: [13.50, 3.65], connectedTo: ['f3_wp_lab7'] },
    { id: 'f3_lift',       name: 'Lift',           center: [ 0.89, 5.70], connectedTo: [] }, // NO CONNECTION
    { id: 'f3_stairs_bot', name: 'Stairs (Bot)',   center: [ 3.57, 5.70], connectedTo: ['f3_wp_stairs_bot'] },
    { id: 'f3_lab7',       name: 'Lab 7',          center: [10.95, 5.70], connectedTo: ['f3_wp_lab7'] },
    { id: 'f3_lab8',       name: 'Lab 8',          center: [20.54, 5.70], connectedTo: ['f3_wp_lab8'] },
    { id: 'f3_women',      name: 'Ladies Toilet',  center: [25.86, 5.70], connectedTo: ['f3_wp_women'] },
    { id: 'f3_gents',      name: 'Men Washroom',   center: [38.11, 5.70], connectedTo: ['f3_wp_gents'] },
  ],

  waypoints: [
    { id: 'f3_wp_stairs_bot', position: [ 3.57, 3.65], connectedTo: ['f3_wp_hod', 'f3_wp_lab7'] },
    { id: 'f3_wp_hod',        position: [ 2.00, 3.65], connectedTo: ['f3_wp_stairs_bot', 'f3_wp_lib'] },
    { id: 'f3_wp_lib',        position: [ 5.35, 3.65], connectedTo: ['f3_wp_hod', 'f3_wp_server'] },
    { id: 'f3_wp_server',     position: [ 8.62, 3.65], connectedTo: ['f3_wp_lib', 'f3_wp_tutorial'] },
    { id: 'f3_wp_tutorial',   position: [13.54, 3.65], connectedTo: ['f3_wp_server', 'f3_wp_lab10'] },
    { id: 'f3_wp_lab10',      position: [20.54, 3.65], connectedTo: ['f3_wp_tutorial', 'f3_wp_stairs_top'] },
    { id: 'f3_wp_stairs_top', position: [26.04, 3.65], connectedTo: ['f3_wp_lab10', 'f3_wp_lab9'] },
    { id: 'f3_wp_lab7',       position: [10.95, 3.65], connectedTo: ['f3_wp_stairs_bot', 'f3_wp_lab8'] },
    { id: 'f3_wp_lab8',       position: [20.54, 3.65], connectedTo: ['f3_wp_lab7', 'f3_wp_women'] },
    { id: 'f3_wp_women',      position: [25.86, 3.65], connectedTo: ['f3_wp_lab8', 'f3_wp_lab9'] },
    { id: 'f3_wp_lab9',       position: [32.21, 3.65], connectedTo: ['f3_wp_stairs_top', 'f3_wp_women', 'f3_wp_gents'] },
    { id: 'f3_wp_gents',      position: [38.11, 3.65], connectedTo: ['f3_wp_lab9'] },
  ],

  walls: [
    { p1: [ 0.00, 0.00], p2: [26.47, 0.00] },
    { p1: [27.17, 0.00], p2: [38.98, 0.00] },
    { p1: [38.98, 0.00], p2: [38.98, 7.30] },
    { p1: [38.98, 7.30], p2: [37.24, 7.30] },
    { p1: [27.17, 7.30], p2: [ 5.36, 7.30] },
    { p1: [ 1.78, 7.30], p2: [ 0.00, 7.30] },
    { p1: [ 0.00, 0.00], p2: [ 0.00, 7.30] },
    { p1: [ 0.00,  7.30], p2: [ 0.00, 10.18] },
    { p1: [ 0.00, 10.18], p2: [ 1.78, 10.18] },
    { p1: [ 1.78, 10.18], p2: [ 1.78,  7.30] },
    { p1: [ 1.78,  7.30], p2: [ 1.78, 10.88] },
    { p1: [ 1.78, 10.88], p2: [ 5.36, 10.88] },
    { p1: [ 5.36, 10.88], p2: [ 5.36,  7.30] },
    { p1: [ 3.58,  7.30], p2: [ 3.58, 10.88] },
    { p1: [27.17, 0.00], p2: [27.17, 7.30] },
    { p1: [27.17, 2.33], p2: [38.98, 2.33] },
    { p1: [ 0.00, 3.20], p2: [24.54, 3.20] },
    { p1: [26.47, 3.20], p2: [27.17, 3.20] },
    { p1: [ 0.00, 4.10], p2: [27.17, 4.10] },
    { p1: [ 4.00, 0.00], p2: [ 4.00, 3.20] },
    { p1: [ 6.70, 0.00], p2: [ 6.70, 3.20] },
    { p1: [10.54, 0.00], p2: [10.54, 3.20] },
    { p1: [16.54, 0.00], p2: [16.54, 3.20] },
    { p1: [24.54, 0.00], p2: [24.54, 3.20] },
    { p1: [24.54, 0.00], p2: [24.54, 1.50] },
    { p1: [27.54, 0.00], p2: [27.54, 1.50] },
    { p1: [24.54, 1.50], p2: [27.54, 1.50] },
    { p1: [24.54, 2.35], p2: [27.54, 2.35] },
    { p1: [ 1.78, 4.10], p2: [ 1.78, 7.30] },
    { p1: [ 3.58, 4.10], p2: [ 3.58, 7.30] },
    { p1: [ 5.36, 4.10], p2: [ 5.36, 7.30] },
    { p1: [16.54, 4.10], p2: [16.54, 7.30] },
    { p1: [24.54, 4.10], p2: [24.54, 7.30] },
    { p1: [27.17, 4.10], p2: [27.17, 7.30] },
    { p1: [37.24, 4.10], p2: [37.24, 7.30] },
  ],

  wallHeight: 3.00,
  wallThickness: 0.15,

  floorMessages: [
    { id: "m1", type: "welcome", text: "WELCOME TO CSE DEPARTMENT", position: [2, 3.65] },
    { id: "m2", type: "quote",   text: "Precision is Key 🎯", position: [15, 3.65] },
  ],
};
