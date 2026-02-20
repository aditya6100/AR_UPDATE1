// =============================================================
// Floor 3 — 2nd Floor (CSE Dept) — ACCURATE MEASUREMENTS
// Measurements: 1 Unit = 1 Metre
// Total Width: 39.04m | Total Depth: 7.30m
//
//  Z=-4.65 ┌──────┬──────┬──────┬──────┬──────┬─────┬──────┐
//          │ HOD  │ DLib │ Serv │ Tut  │Lab10 │Strs │ Lab9 │
//  Z=-0.75 ├──────┴──────┴──────┴──────┴──────┴─────┴──────┤
//  Z= 0.00 ────────── Corridor Spine (Center) ──────────────
//  Z=+0.75 ├────┬────┬──────────┬──────────┬───┬──────┬────┤
//          │Lift│Strs│  Lab 7   │  Lab 8   │WF │ WR1  │WR2 │
//  Z=+4.65 └────┴────┴──────────┴──────────┴───┴──────┴────┘
//          X=0  2.68 4.48      16.0       25.0 25.6  34.98 39.04
// =============================================================

export const floor3Data = {
  floorId: 'f3',
  floorNumber: 3,
  floorName: "2nd Floor (CSE)",

  rooms: [
    // --- TOP ROW ---
    { id: "f3_hod",        name: "HOD Cabin",      center: [2.00,  -2.70], connectedTo: ["f3_wp_hall_hod"] },
    { id: "f3_dept_lib",   name: "Dept Library",   center: [5.85,  -2.70], connectedTo: ["f3_wp_hall_dlib"] },
    { id: "f3_server",     name: "Server Room",    center: [9.62,  -2.70], connectedTo: ["f3_wp_hall_server"] },
    { id: "f3_tutorial",   name: "Tutorial Room",  center: [14.54, -2.70], connectedTo: ["f3_wp_hall_tutorial"] },
    { id: "f3_lab10",      name: "Lab 10",         center: [21.54, -2.70], connectedTo: ["f3_wp_hall_lab10"] },
    { id: "f3_stairs_top", name: "Stairs (Top)",   center: [27.25, -1.92], connectedTo: ["f3_wp_hall_stairs_top"] },
    { id: "f3_lab9",       name: "Lab 9",          center: [34.00, -2.70], connectedTo: ["f3_wp_hall_lab9"] },

    // --- BOTTOM ROW ---
    { id: "f3_lift",       name: "Lift",           center: [1.34,   2.70], connectedTo: ["f3_wp_hall_lift"] },
    { id: "f3_stairs_bot", name: "Stairs (Bottom)",center: [3.58,   2.54], connectedTo: ["f3_wp_hall_stairs_bot"] },
    { id: "f3_lab7",       name: "Lab 7",          center: [10.24,  2.70], connectedTo: ["f3_wp_hall_lab7"] },
    { id: "f3_lab8",       name: "Lab 8",          center: [20.50,  2.70], connectedTo: ["f3_wp_hall_lab8"] },
    { id: "f3_wf",         name: "Water Filter",   center: [25.30,  2.70], connectedTo: ["f3_wp_hall_lab8"] },
    { id: "f3_women",      name: "Ladies Toilet",  center: [30.29,  2.70], connectedTo: ["f3_wp_hall_women"] },
    { id: "f3_gents",      name: "Gents Toilet",   center: [37.01,  2.70], connectedTo: ["f3_wp_hall_gents"] },
  ],

  waypoints: [
    // Main Corridor Spine (Z=0)
    { id: "f3_wp_hall_lift",       position: [1.34,  0], connectedTo: ["f3_wp_hall_stairs_bot", "f2_wp_hall_lift", "f4_wp_hall_lift"] },
    { id: "f3_wp_hall_stairs_bot", position: [3.58,  0], connectedTo: ["f3_wp_hall_lift", "f3_wp_hall_hod"] },
    { id: "f3_wp_hall_hod",        position: [2.00,  0], connectedTo: ["f3_wp_hall_stairs_bot", "f3_wp_hall_dlib"] },
    { id: "f3_wp_hall_dlib",       position: [5.85,  0], connectedTo: ["f3_wp_hall_hod", "f3_wp_hall_lab7"] },
    { id: "f3_wp_hall_lab7",       position: [10.24, 0], connectedTo: ["f3_wp_hall_dlib", "f3_wp_hall_server"] },
    { id: "f3_wp_hall_server",     position: [9.62,  0], connectedTo: ["f3_wp_hall_lab7", "f3_wp_hall_tutorial"] },
    { id: "f3_wp_hall_tutorial",   position: [14.54, 0], connectedTo: ["f3_wp_hall_server", "f3_wp_hall_lab8"] },
    { id: "f3_wp_hall_lab8",       position: [20.50, 0], connectedTo: ["f3_wp_hall_tutorial", "f3_wp_hall_lab10"] },
    { id: "f3_wp_hall_lab10",      position: [21.54, 0], connectedTo: ["f3_wp_hall_lab8", "f3_wp_hall_stairs_top"] },
    { id: "f3_wp_hall_stairs_top", position: [27.25, 0], connectedTo: ["f3_wp_hall_lab10", "f3_wp_hall_women"] },
    { id: "f3_wp_hall_women",      position: [30.29, 0], connectedTo: ["f3_wp_hall_stairs_top", "f3_wp_hall_lab9"] },
    { id: "f3_wp_hall_lab9",       position: [34.00, 0], connectedTo: ["f3_wp_hall_women", "f3_wp_hall_gents"] },
    { id: "f3_wp_hall_gents",      position: [37.01, 0], connectedTo: ["f3_wp_hall_lab9"] },
  ],

  walls: [
    // Outer Boundary
    { p1: [0, -4.65], p2: [39.04, -4.65] },
    { p1: [39.04, -4.65], p2: [39.04, 4.65] },
    { p1: [39.04, 4.65], p2: [0, 4.65] },
    { p1: [0, 4.65], p2: [0, -4.65] },
    
    // Corridor Walls (Z lines)
    { p1: [0, -0.75], p2: [39.04, -0.75] },
    { p1: [0, 0.75], p2: [39.04, 0.75] },

    // Top Row Dividers
    { p1: [4.00, -4.65], p2: [4.00, -0.75] },
    { p1: [7.70, -4.65], p2: [7.70, -0.75] },
    { p1: [11.54, -4.65], p2: [11.54, -0.75] },
    { p1: [17.54, -4.65], p2: [17.54, -0.75] },
    { p1: [25.54, -4.65], p2: [25.54, -0.75] },
    { p1: [28.97, -4.65], p2: [28.97, -0.75] },

    // Bottom Row Dividers
    { p1: [2.68, 0.75], p2: [2.68, 4.65] },
    { p1: [4.48, 0.75], p2: [4.48, 4.65] },
    { p1: [16.00, 0.75], p2: [16.00, 4.65] },
    { p1: [25.00, 0.75], p2: [25.00, 4.65] },
    { p1: [25.60, 0.75], p2: [25.60, 4.65] },
    { p1: [34.98, 0.75], p2: [34.98, 4.65] },
  ],

  wallHeight: 2.8,
  wallThickness: 0.15,

  floorMessages: [
    { id: "m1", type: "welcome", text: "WELCOME TO CSE DEPARTMENT", position: [2, 0] },
    { id: "m2", type: "quote",   text: "The Future is Built Here 🛠️",  position: [15, 0] },
    { id: "m3", type: "utility", text: "LIFT ACCESS 🛗",             position: [1.34, -1] },
  ],
};
