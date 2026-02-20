export interface Room {
  id: string;
  name: string;
  center: [number, number];
  connectedTo: string[];
}

export interface Waypoint {
  id: string;
  position: [number, number];
  connectedTo: string[];
}

export interface Wall {
  p1: [number, number];
  p2: [number, number];
}

export interface FloorMessage {
  id: string;
  text: string;
  position: [number, number];
  type: 'welcome' | 'quote' | 'utility';
}

export interface FloorData {
  floorId: string;
  floorNumber: number;
  floorName: string;
  rooms: Room[];
  waypoints: Waypoint[];
  walls: Wall[];
  floorMessages?: FloorMessage[]; // 👈 New field
  wallHeight: number;
  wallThickness: number;
  planSize?: { width: number; height: number };
}
