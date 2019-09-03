export  type ShapeType = "line" | "rectangle" | "circle" | "polygon" | undefined;

export interface ShapeItem {
    id: number;
    name: string;
    type: ShapeType;
    meta: any;
}