// =============================================================
// Floor 3 — CSE Department (2nd Floor)
// Measurements sourced from hand-drawn PDF (Aditya_Patil-Model.pdf)
// and verified against CAD file (Secondfloorcse.dwg)
// =============================================================

export const floor3Data = {
  floorId: 'f3',
  floorNumber: 3,
  floorName: '2nd Floor (CSE)',

  // ── GREEN CORRIDOR / MIDDLE PORTION POLYGON ───────────────────────────
  corridorPolygon: [
    [ 0.00,  3.20],  //  0 — top-left
    [24.54,  3.20],  //  1 — corridor top → Lab10 RHS
    [24.54,  2.35],  //  2 — step UP (Stairs-box left wall)
    [27.54,  2.35],  //  3 — Stairs box top-right corner
    [27.54,  3.20],  //  4 — step back down
    [27.17,  3.20],  //  5 — jog right to Lab9 left wall
    [38.98,  3.20],  //  6 — right building edge (top)
    [38.98,  4.10],  //  7 — right building edge (bottom)
    [27.17,  4.10],  //  8 — Lab9 left wall (corridor bottom)
    [ 5.36,  4.10],  //  9 — corridor bottom → Stairs right wall
    [ 5.36,  7.30],  // 10 — step DOWN (Stairs+Lift full column)
    [ 0.00,  7.30],  // 11 — left building wall bottom
    [ 0.00,  4.10],  // 12 — left wall back up to corridor
  ] as [number, number][],

  corridorColor: '#2ecc40',

  rooms: [
    {
      id:          'f3_hod',
      name:        'HOD Cabin',
      center:      [2.00, 1.60],
      connectedTo: ['f3_wp_hod'],
    },
    {
      id:          'f3_dept_lib',
      name:        'Dept Library',
      center:      [5.35, 1.60],
      connectedTo: ['f3_wp_lib'],
    },
    {
      id:          'f3_server',
      name:        'Server Room',
      center:      [8.62, 1.60],
      connectedTo: ['f3_wp_server'],
    },
    {
      id:          'f3_tutorial',
      name:        'Tutorial Room',
      center:      [13.54, 1.60],
      connectedTo: ['f3_wp_tutorial'],
    },
    {
      id:          'f3_lab10',
      name:        'Lab 10',
      center:      [20.54, 1.60],
      connectedTo: ['f3_wp_lab10'],
    },
    {
      id:          'f3_stairs_top',
      name:        'Stairs',
      center:      [26.04, 1.10],
      connectedTo: ['f3_wp_stairs_top'],
    },
    {
      id:          'f3_lab9',
      name:        'Lab 9',
      center:      [33.15, 3.65],
      connectedTo: ['f3_wp_lab9'],
    },
    {
      id:          'f3_corridor',
      name:        'Middle Portion',
      center:      [13.50, 3.65],
      connectedTo: ['f3_wp_lab7'],
    },
    {
      id:          'f3_lift',
      name:        'Lift',
      center:      [ 0.89, 5.70],
      connectedTo: ['f3_wp_lift'],
    },
    {
      id:          'f3_stairs_bot',
      name:        'Stairs',
      center:      [ 3.57, 5.70],
      connectedTo: ['f3_wp_stairs_bot'],
    },
    {
      id:          'f3_lab7',
      name:        'Lab 7',
      center:      [10.95, 5.70],
      connectedTo: ['f3_wp_lab7'],
    },
    {
      id:          'f3_lab8',
      name:        'Lab 8',
      center:      [20.54, 5.70],
      connectedTo: ['f3_wp_lab8'],
    },
    {
      id:          'f3_women',
      name:        'Ladies Toilet',
      center:      [25.86, 5.70],
      connectedTo: ['f3_wp_women'],
    },
    {
      id:          'f3_gents',
      name:        'Men Washroom',
      center:      [38.11, 5.70],
      connectedTo: ['f3_wp_gents'],
    },
  ],

  waypoints: [
    {
      id:          'f3_wp_lift',
      position:    [ 0.89, 3.65],
      connectedTo: ['f3_wp_stairs_bot'],
    },
    {
      id:          'f3_wp_stairs_bot',
      position:    [ 3.57, 3.65],
      connectedTo: ['f3_wp_lift', 'f3_wp_hod', 'f3_wp_lab7'],
    },
    {
      id:          'f3_wp_hod',
      position:    [ 2.00, 3.65],
      connectedTo: ['f3_wp_stairs_bot', 'f3_wp_lib'],
    },
    {
      id:          'f3_wp_lib',
      position:    [ 5.35, 3.65],
      connectedTo: ['f3_wp_hod', 'f3_wp_server'],
    },
    {
      id:          'f3_wp_server',
      position:    [ 8.62, 3.65],
      connectedTo: ['f3_wp_lib', 'f3_wp_tutorial'],
    },
    {
      id:          'f3_wp_tutorial',
      position:    [13.54, 3.65],
      connectedTo: ['f3_wp_server', 'f3_wp_lab10'],
    },
    {
      id:          'f3_wp_lab10',
      position:    [20.54, 3.65],
      connectedTo: ['f3_wp_tutorial', 'f3_wp_stairs_top'],
    },
    {
      id:          'f3_wp_stairs_top',
      position:    [26.04, 3.65],
      connectedTo: ['f3_wp_lab10', 'f3_wp_lab9'],
    },
    {
      id:          'f3_wp_lab7',
      position:    [10.95, 3.65],
      connectedTo: ['f3_wp_stairs_bot', 'f3_wp_lab8'],
    },
    {
      id:          'f3_wp_lab8',
      position:    [20.54, 3.65],
      connectedTo: ['f3_wp_lab7', 'f3_wp_women'],
    },
    {
      id:          'f3_wp_women',
      position:    [25.86, 3.65],
      connectedTo: ['f3_wp_lab8', 'f3_wp_lab9'],
    },
    {
      id:          'f3_wp_lab9',
      position:    [32.21, 3.65],
      connectedTo: ['f3_wp_stairs_top', 'f3_wp_women', 'f3_wp_gents'],
    },
    {
      id:          'f3_wp_gents',
      position:    [38.11, 3.65],
      connectedTo: ['f3_wp_lab9'],
    },
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
    { p1: [0.00,  3.20], p2: [2.55,  3.20] },
    { p1: [3.45,  3.20], p2: [4.00,  3.20] },
    { p1: [4.00,  3.20], p2: [5.40,  3.20] },
    { p1: [6.30,  3.20], p2: [7.70,  3.20] },
    { p1: [7.70,  3.20], p2: [9.20,  3.20] },
    { p1: [10.10, 3.20], p2: [11.54, 3.20] },
    { p1: [11.54, 3.20], p2: [13.84, 3.20] },
    { p1: [14.74, 3.20], p2: [17.54, 3.20] },
    { p1: [17.54, 3.20], p2: [20.84, 3.20] },
    { p1: [21.74, 3.20], p2: [25.54, 3.20] },
    { p1: [4.10,  4.10], p2: [10.62, 4.10] },
    { p1: [11.53, 4.10], p2: [16.58, 4.10] },
    { p1: [16.58, 4.10], p2: [20.60, 4.10] },
    { p1: [21.51, 4.10], p2: [25.54, 4.10] },
    { p1: [25.54, 4.10], p2: [27.84, 4.10] },
    { p1: [28.74, 4.10], p2: [32.38, 4.10] },
    { p1: [32.38, 4.10], p2: [34.68, 4.10] },
    { p1: [35.58, 4.10], p2: [39.04, 4.10] },
  ],

  doors: [
    { room: 'f3_hod',       wallSide: 'bottom', posX:  2.00, width: 1.00 },
    { room: 'f3_dept_lib',  wallSide: 'bottom', posX:  5.35, width: 1.40 },
    { room: 'f3_server',    wallSide: 'bottom', posX:  8.12, width: 0.51 },
    { room: 'f3_server',    wallSide: 'bottom', posX:  9.12, width: 1.40 },
    { room: 'f3_tutorial',  wallSide: 'bottom', posX: 13.54, width: 1.40 },
    { room: 'f3_lab10',     wallSide: 'bottom', posX: 20.54, width: 1.40 },
    { room: 'f3_lab10',     wallSide: 'bottom', posX: 23.68, width: 0.43 },
    { room: 'f3_lab7',      wallSide: 'top',    posX: 10.95, width: 0.91 },
    { room: 'f3_lab8',      wallSide: 'top',    posX: 20.54, width: 0.91 },
    { room: 'f3_women',     wallSide: 'top',    posX: 25.86, width: 0.90 },
    { room: 'f3_gents',     wallSide: 'top',    posX: 38.11, width: 0.90 },
  ],

  features: [
    {
      id:     'f3_water_filter',
      name:   'Water Filter',
      type:   'utility',
      center: [24.80, 3.65],
      size:   { width: 0.60, depth: 0.60 },
    },
  ],

  wallHeight: 3.00,
  wallThickness: 0.15,
  planSize: { width: 38.98, height: 10.88 },

  floorMessages: [
    { id: "m1", type: "welcome", text: "WELCOME TO CSE DEPARTMENT", position: [2, 3.65] },
    { id: "m2", type: "quote",   text: "Code is Poetry 💻", position: [15, 3.65] },
    { id: "m3", type: "utility", text: "LIFT ACCESS 🛗", position: [0.89, 4.1] },
  ],
};
