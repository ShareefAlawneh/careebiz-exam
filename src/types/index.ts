import { MainReducer } from "@careebiz/pages/Main/ducks/reducers";

export type ShapeType =
  | "circle"
  | "polygon"
  | "polyline"
  | "rectangle"
  | undefined;

export interface ShapeItem {
  id: number;
  name: string;
  type: ShapeType;
  meta: any;
}

export interface Store {
  main: MainReducer;
}
