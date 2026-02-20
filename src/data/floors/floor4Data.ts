// =============================================================
// Floor 4 — 3rd Floor (301-306, Gents Toilet)
// =============================================================

export const floor4Data = {
  floorId: 'f4',
  floorNumber: 4,
  floorName: "3rd Floor",

  rooms: [
    { id: "f4_301",        name: "Classroom 301",  center: [-22.5, -5.25], connectedTo: ["f4_wp_hall_301"] },
    { id: "f4_302",        name: "Classroom 302",  center: [-16.5, -5.25], connectedTo: ["f4_wp_hall_302"] },
    { id: "f4_303",        name: "Classroom 303",  center: [-10,   -5.25], connectedTo: ["f4_wp_hall_303"] },
    { id: "f4_304",        name: "Classroom 304",  center: [ -4,   -5.25], connectedTo: ["f4_wp_hall_303"] },
    { id: "f4_306",        name: "Classroom 306",  center: [  1.5, -5.25], connectedTo: ["f4_wp_hall_306"] },
    { id: "f4_gents",      name: "Gents Toilet",   center: [ 14.5,  5.25], connectedTo: ["f4_wp_hall_gents"] },
    { id: "f4_lift",       name: "Lift",           center: [-24,    5.25], connectedTo: ["f4_wp_hall_lift"] },
    { id: "f4_stairs_bot", name: "Stairs (Bot)",   center: [-20,    5.25], connectedTo: ["f4_wp_hall_stairs_bot"] },
  ],

  waypoints: [
    { id: "f4_wp_hall_lift",       position: [-24, 0], connectedTo: ["f4_wp_hall_stairs_bot"] },
    { id: "f4_wp_hall_stairs_bot", position: [-20, 0], connectedTo: ["f4_wp_hall_lift", "f4_wp_hall_301"] },
    { id: "f4_wp_hall_301",        position: [-22.5,0],connectedTo: ["f4_wp_hall_stairs_bot", "f4_wp_hall_302"] },
    { id: "f4_wp_hall_302",        position: [-16.5,0],connectedTo: ["f4_wp_hall_301", "f4_wp_hall_303"] },
    { id: "f4_wp_hall_303",        position: [-10, 0], connectedTo: ["f4_wp_hall_302", "f4_wp_hall_306"] },
    { id: "f4_wp_hall_306",        position: [  1, 0], connectedTo: ["f4_wp_hall_303", "f4_wp_hall_gents"] },
    { id: "f4_wp_hall_gents",      position: [14.5, 0], connectedTo: ["f4_wp_hall_306"] },
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
