// =============================================================
// Floor 5 — 4th Floor (ENTC Dept)
// =============================================================

export const floor5Data = {
  floorId: 'f5',
  floorNumber: 5,
  floorName: "4th Floor (ENTC)",

  rooms: [
    { id: "f5_entc_hod",   name: "ENTC HOD Cabin", center: [-22.5, -5.25], connectedTo: ["f5_wp_hall_hod"] },
    { id: "f5_dept_lib",   name: "Dept Library",   center: [-16.5, -5.25], connectedTo: ["f5_wp_hall_dlib"] },
    { id: "f5_tutorial",   name: "Tutorial Room",  center: [-10,   -5.25], connectedTo: ["f5_wp_hall_lab11"] },
    { id: "f5_lab11",      name: "Lab 11",         center: [ -4,   -5.25], connectedTo: ["f5_wp_hall_lab11"] },
    { id: "f5_lab12",      name: "Lab 12",         center: [  1.5, -5.25], connectedTo: ["f5_wp_hall_lab12"] },
    { id: "f5_lab13",      name: "Lab 13",         center: [  7,   -5.25], connectedTo: ["f5_wp_hall_lab14"] },
    { id: "f5_lab14",      name: "Lab 14",         center: [ 14.5, -5.25], connectedTo: ["f5_wp_hall_lab14"] },
    { id: "f5_lift",       name: "Lift",           center: [-24,    5.25], connectedTo: ["f5_wp_hall_lift"] },
    { id: "f5_stairs_bot", name: "Stairs (Bot)",   center: [-20,    5.25], connectedTo: ["f5_wp_hall_stairs_bot"] },
  ],

  waypoints: [
    { id: "f5_wp_hall_lift",       position: [-24, 0], connectedTo: ["f5_wp_hall_stairs_bot"] },
    { id: "f5_wp_hall_stairs_bot", position: [-20, 0], connectedTo: ["f5_wp_hall_lift", "f5_wp_hall_hod"] },
    { id: "f5_wp_hall_hod",        position: [-22.5,0],connectedTo: ["f5_wp_hall_stairs_bot", "f5_wp_hall_dlib"] },
    { id: "f5_wp_hall_dlib",       position: [-16.5,0],connectedTo: ["f5_wp_hall_hod", "f5_wp_hall_lab11"] },
    { id: "f5_wp_hall_lab11",      position: [-10, 0], connectedTo: ["f5_wp_hall_dlib", "f5_wp_hall_lab12"] },
    { id: "f5_wp_hall_lab12",      position: [  1, 0], connectedTo: ["f5_wp_hall_lab11", "f5_wp_hall_lab14"] },
    { id: "f5_wp_hall_lab14",      position: [14.5, 0], connectedTo: ["f5_wp_hall_lab12"] },
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
    { p1: [  4,  1.5], p2: [  4,  9] },
    { p1: [ 11,  1.5], p2: [ 11,  9] },
  ],

  wallHeight: 3,
  wallThickness: 0.2,
};
