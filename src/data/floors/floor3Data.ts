// =============================================================
// Floor 3 — CSE Department (2nd Floor)
// REAL MEASUREMENTS from architectural floor plan (all in metres)
// =============================================================

import type { FloorData } from '../floorTypes';

export const floor3Data = {
  floorId: 'f3',
  floorNumber: 3,
  floorName: '2nd Floor (CSE)',

  // All centres in [X, Z] metres — real world scale
  rooms: [
    // ── TOP ROW (Z centre = 1.60, top of building) ───────────────────────
    {
      id:          'f3_hod',
      name:        'HOD Cabin',
      center:      [2.00, 1.60],
      connectedTo: ['f3_wp_hod'],
    },
    {
      id:          'f3_dept_lib',
      name:        'Dept Library',
      center:      [5.85, 1.60],
      connectedTo: ['f3_wp_lib'],
    },
    {
      id:          'f3_server',
      name:        'Server Room',
      center:      [9.62, 1.60],
      connectedTo: ['f3_wp_server'],
    },
    {
      id:          'f3_tutorial',
      name:        'Tutorial Room',
      center:      [14.54, 1.60],
      connectedTo: ['f3_wp_tutorial'],
    },
    {
      id:          'f3_lab10',
      name:        'Lab 10',
      center:      [21.54, 1.60],
      connectedTo: ['f3_wp_lab10'],
    },
    {
      id:          'f3_stairs_top',
      name:        'Stairs',
      center:      [27.04, 2.18],   // shallower (2.35m deep)
      connectedTo: ['f3_wp_stairs_top'],
    },
    {
      id:          'f3_lab9',
      name:        'Lab 9',
      center:      [34.01, 1.60],   // top row only
      connectedTo: ['f3_wp_lab9'],
    },

    // ── CORRIDOR (label only) ─────────────────────────────────────────────
    {
      id:          'f3_corridor',
      name:        'Middle Portion',
      center:      [14.00, 3.65],
      connectedTo: ['f3_wp_lab7'],
    },

    // ── BOTTOM ROW (Z centre = 5.70) ──────────────────────────────────────
    {
      id:          'f3_lift',
      name:        'Lift',
      center:      [1.34, 5.70],
      connectedTo: ['f3_wp_lift'],
    },
    {
      id:          'f3_stairs_bot',
      name:        'Stairs',
      center:      [4.68, 5.70],
      connectedTo: ['f3_wp_stairs_bot'],
    },
    {
      id:          'f3_lab7',
      name:        'Lab 7',
      center:      [11.08, 5.70],
      connectedTo: ['f3_wp_lab7'],
    },
    {
      id:          'f3_lab8',
      name:        'Lab 8',
      center:      [21.06, 5.70],
      connectedTo: ['f3_wp_lab8'],
    },
    {
      id:          'f3_women',
      name:        'Ladies Toilet',
      center:      [28.96, 5.70],
      connectedTo: ['f3_wp_women'],
    },
    {
      id:          'f3_gents',
      name:        'Gents Toilet',
      center:      [35.71, 5.70],
      connectedTo: ['f3_wp_gents'],
    },
  ],

  // ── Waypoints along corridor centre line (Z = 3.65) ────────────────────
  // position: [X, Z]  real metres
  waypoints: [
    // Lift & Stairs bottom (left end)
    {
      id:          'f3_wp_lift',
      position:    [1.34, 3.65],
      connectedTo: ['f3_wp_stairs_bot'],
    },
    {
      id:          'f3_wp_stairs_bot',
      position:    [4.68, 3.65],
      connectedTo: ['f3_wp_lift', 'f3_wp_hod'],
    },
    // Top row room waypoints (same X as room, at corridor Z)
    {
      id:          'f3_wp_hod',
      position:    [2.00, 3.65],
      connectedTo: ['f3_wp_stairs_bot', 'f3_wp_lib'],
    },
    {
      id:          'f3_wp_lib',
      position:    [5.85, 3.65],
      connectedTo: ['f3_wp_hod', 'f3_wp_server'],
    },
    {
      id:          'f3_wp_server',
      position:    [9.62, 3.65],
      connectedTo: ['f3_wp_lib', 'f3_wp_tutorial'],
    },
    {
      id:          'f3_wp_tutorial',
      position:    [14.54, 3.65],
      connectedTo: ['f3_wp_server', 'f3_wp_lab10'],
    },
    {
      id:          'f3_wp_lab10',
      position:    [21.54, 3.65],
      connectedTo: ['f3_wp_tutorial', 'f3_wp_lab7'],
    },
    {
      id:          'f3_wp_lab7',
      position:    [11.08, 3.65],
      connectedTo: ['f3_wp_stairs_bot', 'f3_wp_lab8'],
    },
    {
      id:          'f3_wp_lab8',
      position:    [21.06, 3.65],
      connectedTo: ['f3_wp_lab7', 'f3_wp_women'],
    },
    {
      id:          'f3_wp_women',
      position:    [28.96, 3.65],
      connectedTo: ['f3_wp_lab8', 'f3_wp_gents'],
    },
    {
      id:          'f3_wp_gents',
      position:    [35.71, 3.65],
      connectedTo: ['f3_wp_women', 'f3_wp_lab9'],
    },
    {
      id:          'f3_wp_lab9',
      position:    [34.01, 3.65],
      connectedTo: ['f3_wp_gents'],
    },
    {
      id:          'f3_wp_stairs_top',
      position:    [27.04, 3.65],
      connectedTo: ['f3_wp_lab10', 'f3_wp_gents'],
    },
  ],

  // ── Walls — all coordinates in real metres [X, Z] ───────────────────────
  walls: [
    // ===== OUTER BOUNDARY =====
    // Top wall (Z=0): HOD through Lab 10 + Stairs section
    { p1: [0.00,  0.00], p2: [28.54, 0.00] },
    // Top wall: Lab 9 section
    { p1: [28.97, 0.00], p2: [39.04, 0.00] },
    // Right wall (full height)
    { p1: [39.04, 0.00], p2: [39.04, 7.30] },
    // Bottom wall (full width)
    { p1: [39.04, 7.30], p2: [0.00,  7.30] },
    // Left wall (full height)
    { p1: [0.00,  7.30], p2: [0.00,  0.00] },

    // ===== LAB 9 LEFT BOUNDARY (top row only — Z: 0 → 3.20) =====
    // Lab 9 is separated from Stairs area by a wall from top to corridor
    { p1: [28.97, 0.00], p2: [28.97, 3.20] },

    // ===== CORRIDOR WALLS (horizontal) =====
    // Bottom of top rooms / top of corridor — Z = 3.20
    { p1: [0.00,  3.20], p2: [28.54, 3.20] },
    { p1: [28.97, 3.20], p2: [39.04, 3.20] },
    // Top of bottom rooms / bottom of corridor — Z = 4.10
    { p1: [0.00,  4.10], p2: [39.04, 4.10] },

    // ===== TOP ROW VERTICAL DIVIDERS (Z: 0 → 3.20) =====
    // HOD Cabin | Dept Library  at X = 4.00
    { p1: [4.00,  0.00], p2: [4.00,  3.20] },
    // Dept Library | Server Room  at X = 7.70
    { p1: [7.70,  0.00], p2: [7.70,  3.20] },
    // Server Room | Tutorial Room  at X = 11.54
    { p1: [11.54, 0.00], p2: [11.54, 3.20] },
    // Tutorial Room | Lab 10  at X = 17.54
    { p1: [17.54, 0.00], p2: [17.54, 3.20] },
    // Lab 10 | Stairs(top)  at X = 25.54
    { p1: [25.54, 0.00], p2: [25.54, 3.20] },
    // Stairs(top) right wall  at X = 28.54
    { p1: [28.54, 0.00], p2: [28.54, 2.35] },
    // Stairs(top) bottom wall (horizontal) at Z = 2.35, X: 25.54 → 28.54
    { p1: [25.54, 2.35], p2: [28.54, 2.35] },

    // ===== DOORS IN TOP ROW (short gap segments) =====
    // HOD Cabin door at ~X=3.00 (0.90m gap — wall continues either side)
    { p1: [0.00,  3.20], p2: [2.55,  3.20] },
    { p1: [3.45,  3.20], p2: [4.00,  3.20] },
    // Dept Library door
    { p1: [4.00,  3.20], p2: [5.40,  3.20] },
    { p1: [6.30,  3.20], p2: [7.70,  3.20] },
    // Server Room door
    { p1: [7.70,  3.20], p2: [9.20,  3.20] },
    { p1: [10.10, 3.20], p2: [11.54, 3.20] },
    // Tutorial Room door
    { p1: [11.54, 3.20], p2: [13.84, 3.20] },
    { p1: [14.74, 3.20], p2: [17.54, 3.20] },
    // Lab 10 door
    { p1: [17.54, 3.20], p2: [20.84, 3.20] },
    { p1: [21.74, 3.20], p2: [25.54, 3.20] },

    // ===== BOTTOM ROW VERTICAL DIVIDERS (Z: 4.10 → 7.30) =====
    // Lift right wall  at X = 2.68
    { p1: [2.68,  4.10], p2: [2.68,  7.30] },
    // Stairs(bot) left wall  at X = 3.78
    { p1: [3.78,  4.10], p2: [3.78,  7.30] },
    // Stairs(bot) right wall / Lab7 left  at X = 5.58
    { p1: [5.58,  4.10], p2: [5.58,  7.30] },
    // Inner stair divider  at X = 4.68
    { p1: [4.68,  4.10], p2: [4.68,  7.30] },
    // Lab 7 | Lab 8  at X = 16.58
    { p1: [16.58, 4.10], p2: [16.58, 7.30] },
    // Lab 8 | Women Washroom  at X = 25.54
    { p1: [25.54, 4.10], p2: [25.54, 7.30] },
    // Women Washroom | Men Washroom  at X = 32.38
    { p1: [32.38, 4.10], p2: [32.38, 7.30] },

    // ===== DOORS IN BOTTOM ROW =====
    // Lab 7 door (0.91m)
    { p1: [4.10,  4.10], p2: [10.62, 4.10] },
    { p1: [11.53, 4.10], p2: [16.58, 4.10] },
    // Lab 8 door (0.91m)
    { p1: [16.58, 4.10], p2: [20.60, 4.10] },
    { p1: [21.51, 4.10], p2: [25.54, 4.10] },
    // Women Washroom door (0.90m)
    { p1: [25.54, 4.10], p2: [27.84, 4.10] },
    { p1: [28.74, 4.10], p2: [32.38, 4.10] },
    // Men Washroom door (0.90m)
    { p1: [32.38, 4.10], p2: [34.68, 4.10] },
    { p1: [35.58, 4.10], p2: [39.04, 4.10] },
  ],

  wallHeight: 3.00,
  wallThickness: 0.15,
  planSize: { width: 39.04, height: 7.30 },

  floorMessages: [
    { id: "m1", type: "welcome", text: "WELCOME TO CSE DEPARTMENT", position: [2, 3.65] },
    { id: "m2", type: "quote",   text: "Code is Poetry 💻", position: [15, 3.65] },
    { id: "m3", type: "utility", text: "LIFT ACCESS 🛗", position: [1.34, 4.1] },
  ],
};
