// =============================================================
// Floor 1 — Ground Floor (GYMKHANA, G1-G5)
// =============================================================

export const floor1Data = {
  floorId: 'f1',
  floorNumber: 1,
  floorName: "Ground Floor",

  rooms: [
    { id: "f1_gymkhana",   name: "GYMKHANA",       center: [-22.5, -5.25], connectedTo: ["f1_wp_hall_gymkhana"] },
    { id: "f1_g1",         name: "G1",             center: [-16.5, -5.25], connectedTo: ["f1_wp_hall_g1"] },
    { id: "f1_g2",         name: "G2",             center: [-10,   -5.25], connectedTo: ["f1_wp_hall_g2"] },
    { id: "f1_g3",         name: "G3",             center: [ -4,   -5.25], connectedTo: ["f1_wp_hall_g2"] },
    { id: "f1_g4",         name: "G4",             center: [  1.5, -5.25], connectedTo: ["f1_wp_hall_g4"] },
    { id: "f1_g5",         name: "G5",             center: [  7,   -5.25], connectedTo: ["f1_wp_hall_gents"] },
    { id: "f1_gents",      name: "Gents Toilet",   center: [ 14.5,  5.25], connectedTo: ["f1_wp_hall_gents"] },
    { id: "f1_lift",       name: "Lift",           center: [-24,    5.25], connectedTo: ["f1_wp_hall_lift"] },
    { id: "f1_stairs_bot", name: "Stairs (Bot)",   center: [-20,    5.25], connectedTo: ["f1_wp_hall_stairs_bot"] },
  ],

  waypoints: [
    { id: "f1_wp_hall_lift",       position: [-24, 0], connectedTo: ["f1_wp_hall_stairs_bot"] },
    { id: "f1_wp_hall_stairs_bot", position: [-20, 0], connectedTo: ["f1_wp_hall_lift", "f1_wp_hall_gymkhana"] },
    { id: "f1_wp_hall_gymkhana",   position: [-22.5,0],connectedTo: ["f1_wp_hall_stairs_bot", "f1_wp_hall_g1"] },
    { id: "f1_wp_hall_g1",         position: [-16.5,0],connectedTo: ["f1_wp_hall_gymkhana", "f1_wp_hall_g2"] },
    { id: "f1_wp_hall_g2",         position: [-10, 0], connectedTo: ["f1_wp_hall_g1", "f1_wp_hall_g4"] },
    { id: "f1_wp_hall_g4",         position: [  1, 0], connectedTo: ["f1_wp_hall_g2", "f1_wp_hall_gents"] },
    { id: "f1_wp_hall_gents",      position: [14.5, 0], connectedTo: ["f1_wp_hall_g4"] },
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
