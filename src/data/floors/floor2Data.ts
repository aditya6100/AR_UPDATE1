// =============================================================
// Floor 2 — CSE Department (your actual floor)
// =============================================================

export const floor2Data = {
  floorId: 'f2',
  floorNumber: 2,
  floorName: "CSE Department (2nd Floor)",

  rooms: [
    // TOP ROW (Z: -9 → -1.5)
    { id: "f2_hod",        name: "HOD Cabin",      center: [-22.5, -5.25], connectedTo: ["f2_wp_hall_hod"] },
    { id: "f2_dept_lib",   name: "Dept Library",   center: [-16.5, -5.25], connectedTo: ["f2_wp_hall_dlib"] },
    { id: "f2_server",     name: "Server Room",    center: [-10,   -5.25], connectedTo: ["f2_wp_hall_lab7"] },
    { id: "f2_tutorial",   name: "Tutorial Room",  center: [ -4,   -5.25], connectedTo: ["f2_wp_hall_lab7"] },
    { id: "f2_lab10",      name: "Lab 10",         center: [  1.5, -5.25], connectedTo: ["f2_wp_hall_lab8"] },
    { id: "f2_stairs_top", name: "Stairs",         center: [  7,   -5.25], connectedTo: ["f2_wp_hall_gents"] },
    { id: "f2_lab9",       name: "Lab 9",          center: [ 17.5, -5.25], connectedTo: ["f2_wp_hall_lab9"] },
    // CORRIDOR
    { id: "f2_corridor",   name: "Middle Portion", center: [  0,    0],    connectedTo: ["f2_wp_hall_lab8"] },
    // BOTTOM ROW (Z: +1.5 → +9)
    { id: "f2_lift",       name: "Lift",           center: [-24,    5.25], connectedTo: ["f2_wp_hall_lift"] },
    { id: "f2_stairs_bot", name: "Stairs",         center: [-20,    5.25], connectedTo: ["f2_wp_hall_stairs_bot"] },
    { id: "f2_lab7",       name: "Lab 7",          center: [-10,    5.25], connectedTo: ["f2_wp_hall_lab7"] },
    { id: "f2_lab8",       name: "Lab 8",          center: [  1,    5.25], connectedTo: ["f2_wp_hall_lab8"] },
    { id: "f2_women",      name: "Women Washroom", center: [  7.5,  5.25], connectedTo: ["f2_wp_hall_women"] },
    { id: "f2_gents",      name: "Men Washroom",   center: [ 14.5,  5.25], connectedTo: ["f2_wp_hall_gents"] },
  ],

  waypoints: [
    // Main Corridor Spine (Z=0)
    { id: "f2_wp_hall_lift",       position: [-24, 0], connectedTo: ["f2_wp_hall_stairs_bot", "f1_wp_lift", "f3_wp_lift"] },
    { id: "f2_wp_hall_stairs_bot", position: [-20, 0], connectedTo: ["f2_wp_hall_lift", "f2_wp_hall_hod", "f1_wp_stairs_bot", "f3_wp_stairs_bot"] },
    { id: "f2_wp_hall_hod",        position: [-22.5,0],connectedTo: ["f2_wp_hall_stairs_bot", "f2_wp_hall_dlib"] },
    { id: "f2_wp_hall_dlib",       position: [-16.5,0],connectedTo: ["f2_wp_hall_hod", "f2_wp_hall_lab7"] },
    { id: "f2_wp_hall_lab7",       position: [-10, 0], connectedTo: ["f2_wp_hall_dlib", "f2_wp_hall_lab8"] },
    { id: "f2_wp_hall_lab8",       position: [  1, 0], connectedTo: ["f2_wp_hall_lab7", "f2_wp_hall_women"] },
    { id: "f2_wp_hall_women",      position: [7.5, 0], connectedTo: ["f2_wp_hall_lab8", "f2_wp_hall_gents"] },
    { id: "f2_wp_hall_gents",      position: [14.5, 0], connectedTo: ["f2_wp_hall_women", "f2_wp_hall_lab9", "f1_wp_stairs_top", "f3_wp_stairs_top"] },
    { id: "f2_wp_hall_lab9",       position: [20,  0], connectedTo: ["f2_wp_hall_gents"] },
  ],

  walls: [
    // Outer boundary
    { p1: [-26, -9], p2: [ 26, -9] },
    { p1: [ 26, -9], p2: [ 26,  1.5] },
    { p1: [ 26,  1.5], p2: [ 18,  1.5] },
    { p1: [ 18,  1.5], p2: [ 18,  9] },
    { p1: [ 18,  9],  p2: [-26,  9] },
    { p1: [-26,  9],  p2: [-26, -9] },
    // Corridor walls
    { p1: [-26, -1.5], p2: [ 26, -1.5] },
    { p1: [-26,  1.5], p2: [ 26,  1.5] },
    // Top row dividers
    { p1: [-19, -9], p2: [-19, -1.5] },
    { p1: [-14, -9], p2: [-14, -1.5] },
    { p1: [ -6, -9], p2: [ -6, -1.5] },
    { p1: [ -2, -9], p2: [ -2, -1.5] },
    { p1: [  5, -9], p2: [  5, -1.5] },
    { p1: [  9, -9], p2: [  9, -1.5] },
    // Bottom row dividers
    { p1: [-22,  1.5], p2: [-22,  9] },
    { p1: [-18,  1.5], p2: [-18,  9] },
    { p1: [-20,  1.5], p2: [-20,  9] },
    { p1: [ -2,  1.5], p2: [ -2,  9] },
    { p1: [  4,  1.5], p2: [  4,  9] },
    { p1: [ 11,  1.5], p2: [ 11,  9] },
  ],

  wallHeight: 3,
  wallThickness: 0.2,
};
