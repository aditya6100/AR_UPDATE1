// =============================================================
// Floor 2 — 1st Floor (Lab 1-6, Ladies Toilet)
// =============================================================

export const floor2Data = {
  floorId: 'f2',
  floorNumber: 2,
  floorName: "1st Floor",

  rooms: [
    { id: "f2_lab1",       name: "Lab 1",          center: [-22.5, -5.25], connectedTo: ["f2_wp_hall_lab1"] },
    { id: "f2_lab2",       name: "Lab 2",          center: [-16.5, -5.25], connectedTo: ["f2_wp_hall_lab2"] },
    { id: "f2_lab3",       name: "Lab 3",          center: [-10,   -5.25], connectedTo: ["f2_wp_hall_lab3"] },
    { id: "f2_lab4",       name: "Lab 4",          center: [ -4,   -5.25], connectedTo: ["f2_wp_hall_lab3"] },
    { id: "f2_lab5",       name: "Lab 5",          center: [  1.5, -5.25], connectedTo: ["f2_wp_hall_lab5"] },
    { id: "f2_lab6",       name: "Lab 6",          center: [  7,   -5.25], connectedTo: ["f2_wp_hall_women"] },
    { id: "f2_women",      name: "Ladies Toilet",  center: [ 14.5,  5.25], connectedTo: ["f2_wp_hall_women"] },
    { id: "f2_lift",       name: "Lift",           center: [-24,    5.25], connectedTo: ["f2_wp_hall_lift"] },
    { id: "f2_stairs_bot", name: "Stairs (Bot)",   center: [-20,    5.25], connectedTo: ["f2_wp_hall_stairs_bot"] },
  ],

  waypoints: [
    { id: "f2_wp_hall_lift",       position: [-24, 0], connectedTo: ["f2_wp_hall_stairs_bot"] },
    { id: "f2_wp_hall_stairs_bot", position: [-20, 0], connectedTo: ["f2_wp_hall_lift", "f2_wp_hall_lab1"] },
    { id: "f2_wp_hall_lab1",       position: [-22.5,0],connectedTo: ["f2_wp_hall_stairs_bot", "f2_wp_hall_lab2"] },
    { id: "f2_wp_hall_lab2",       position: [-16.5,0],connectedTo: ["f2_wp_hall_lab1", "f2_wp_hall_lab3"] },
    { id: "f2_wp_hall_lab3",       position: [-10, 0], connectedTo: ["f2_wp_hall_lab2", "f2_wp_hall_lab5"] },
    { id: "f2_wp_hall_lab5",       position: [  1, 0], connectedTo: ["f2_wp_hall_lab3", "f2_wp_hall_women"] },
    { id: "f2_wp_hall_women",      position: [14.5, 0], connectedTo: ["f2_wp_hall_lab5"] },
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

  floorMessages: [
    { id: "m1", type: "welcome", text: "1ST FLOOR - LAB BLOCK",     position: [-24, 2] },
    { id: "m2", type: "quote",   text: "Code is Poetry 💻",         position: [0, 0] },
    { id: "m3", type: "utility", text: "LAB ACCESS AHEAD",          position: [-10, 0] },
  ],
};
