// =============================================================
// Floor 3 — 2nd Floor (CSE Dept)
// =============================================================

export const floor3Data = {
  floorId: 'f3',
  floorNumber: 3,
  floorName: "2nd Floor (CSE)",

  rooms: [
    { id: "f3_hod",        name: "HOD Cabin",      center: [-22.5, -5.25], connectedTo: ["f3_wp_hall_hod"] },
    { id: "f3_dept_lib",   name: "Dept Library",   center: [-16.5, -5.25], connectedTo: ["f3_wp_hall_dlib"] },
    { id: "f3_server",     name: "Server Room",    center: [-10,   -5.25], connectedTo: ["f3_wp_hall_lab7"] },
    { id: "f3_tutorial",   name: "Tutorial Room",  center: [ -4,   -5.25], connectedTo: ["f3_wp_hall_lab7"] },
    { id: "f3_lab10",      name: "Lab 10",         center: [  1.5, -5.25], connectedTo: ["f3_wp_hall_lab8"] },
    { id: "f3_lab9",       name: "Lab 9",          center: [ 17.5, -5.25], connectedTo: ["f3_wp_hall_lab9"] },
    { id: "f3_lab7",       name: "Lab 7",          center: [-10,    5.25], connectedTo: ["f3_wp_hall_lab7"] },
    { id: "f3_lab8",       name: "Lab 8",          center: [  1,    5.25], connectedTo: ["f3_wp_hall_lab8"] },
    { id: "f3_women",      name: "Ladies Toilet",  center: [  7.5,  5.25], connectedTo: ["f3_wp_hall_women"] },
    { id: "f3_gents",      name: "Gents Toilet",   center: [ 14.5,  5.25], connectedTo: ["f3_wp_hall_gents"] },
    { id: "f3_lift",       name: "Lift",           center: [-24,    5.25], connectedTo: ["f3_wp_hall_lift"] },
    { id: "f3_stairs_bot", name: "Stairs (Bot)",   center: [-20,    5.25], connectedTo: ["f3_wp_hall_stairs_bot"] },
  ],

  waypoints: [
    { id: "f3_wp_hall_lift",       position: [-24, 0], connectedTo: ["f3_wp_hall_stairs_bot", "f2_wp_lift", "f4_wp_lift"] },
    { id: "f3_wp_hall_stairs_bot", position: [-20, 0], connectedTo: ["f3_wp_hall_lift", "f3_wp_hall_hod", "f2_wp_stairs_bot", "f4_wp_stairs_bot"] },
    { id: "f3_wp_hall_hod",        position: [-22.5,0],connectedTo: ["f3_wp_hall_stairs_bot", "f3_wp_hall_dlib"] },
    { id: "f3_wp_hall_dlib",       position: [-16.5,0],connectedTo: ["f3_wp_hall_hod", "f3_wp_hall_lab7"] },
    { id: "f3_wp_hall_lab7",       position: [-10, 0], connectedTo: ["f3_wp_hall_dlib", "f3_wp_hall_lab8"] },
    { id: "f3_wp_hall_lab8",       position: [  1, 0], connectedTo: ["f3_wp_hall_lab7", "f3_wp_hall_women"] },
    { id: "f3_wp_hall_women",      position: [7.5, 0], connectedTo: ["f3_wp_hall_lab8", "f3_wp_hall_gents"] },
    { id: "f3_wp_hall_gents",      position: [14.5, 0], connectedTo: ["f3_wp_hall_women", "f3_wp_hall_lab9", "f2_wp_stairs_top", "f4_wp_stairs_top"] },
    { id: "f3_wp_hall_lab9",       position: [20,  0], connectedTo: ["f3_wp_hall_gents"] },
  ],

  walls: [
    { p1: [-26, -9], p2: [ 26, -9] },
    { p1: [ 26, -9], p2: [ 26,  1.5] },
    { p1: [ 26,  1.5], p2: [ 18,  1.5] },
    { p1: [ 18,  1.5], p2: [ 18,  9] },
    { p1: [ 18,  9],  p2: [-26,  9] },
    { p1: [-26,  9],  p2: [-26, -9] },
    { p1: [-26, -1.5], p2: [ 26, -1.5] },
    { p1: [-26,  1.5], p2: [ 26,  1.5] },
    { p1: [-19, -9], p2: [-19, -1.5] },
    { p1: [-14, -9], p2: [-14, -1.5] },
    { p1: [ -6, -9], p2: [ -6, -1.5] },
    { p1: [ -2, -9], p2: [ -2, -1.5] },
    { p1: [  5, -9], p2: [  5, -1.5] },
    { p1: [  9, -9], p2: [  9, -1.5] },
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
