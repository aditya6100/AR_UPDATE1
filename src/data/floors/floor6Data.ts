// =============================================================
// Floor 6 — 5th Floor (501-505)
// =============================================================

export const floor6Data = {
  floorId: 'f6',
  floorNumber: 6,
  floorName: "5th Floor",

  rooms: [
    { id: "f6_501",        name: "Classroom 501",  center: [-22.5, -5.25], connectedTo: ["f6_wp_hall_501"] },
    { id: "f6_502",        name: "Classroom 502",  center: [-16.5, -5.25], connectedTo: ["f6_wp_hall_502"] },
    { id: "f6_503",        name: "Classroom 503",  center: [-10,   -5.25], connectedTo: ["f6_wp_hall_503"] },
    { id: "f6_504",        name: "Classroom 504",  center: [ -4,   -5.25], connectedTo: ["f6_wp_hall_503"] },
    { id: "f6_505",        name: "Classroom 505",  center: [  1.5, -5.25], connectedTo: ["f6_wp_hall_505"] },
    { id: "f6_lift",       name: "Lift",           center: [-24,    5.25], connectedTo: ["f6_wp_hall_lift"] },
    { id: "f6_stairs_bot", name: "Stairs (Bot)",   center: [-20,    5.25], connectedTo: ["f6_wp_hall_stairs_bot"] },
  ],

  waypoints: [
    { id: "f6_wp_hall_lift",       position: [-24, 0], connectedTo: ["f6_wp_hall_stairs_bot"] },
    { id: "f6_wp_hall_stairs_bot", position: [-20, 0], connectedTo: ["f6_wp_hall_lift", "f6_wp_hall_501"] },
    { id: "f6_wp_hall_501",        position: [-22.5,0],connectedTo: ["f6_wp_hall_stairs_bot", "f6_wp_hall_502"] },
    { id: "f6_wp_hall_502",        position: [-16.5,0],connectedTo: ["f6_wp_hall_501", "f6_wp_hall_503"] },
    { id: "f6_wp_hall_503",        position: [-10, 0], connectedTo: ["f6_wp_hall_502", "f6_wp_hall_505"] },
    { id: "f6_wp_hall_505",        position: [  1, 0], connectedTo: ["f6_wp_hall_503"] },
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
    { id: "m1", type: "welcome", text: "5TH FLOOR CLASSROOMS",     position: [-24, 2] },
    { id: "m2", type: "quote",   text: "Reach for the Stars ✨",    position: [0, 0] },
  ],
};
