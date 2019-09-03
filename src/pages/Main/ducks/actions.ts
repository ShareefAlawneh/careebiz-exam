import { createAction } from "redux-act";
import { ShapeItem } from "@careebiz/types";

interface EditShapeItemPayload {
  shape: ShapeItem;
}
interface EditShapeItemNamePayload {
  id: number;
  name: string;
}

export const addShapeItem = createAction<EditShapeItemPayload>(
  "add shape item"
);
export const editShapeItemShape = createAction<EditShapeItemPayload>(
  "edit shape item shape"
);
export const editShapeItemName = createAction<EditShapeItemNamePayload>(
  "edit shape item name"
);
export const deleteShapeItem = createAction<number>("delete shape item");
export const persistShapeItem = createAction<any>("persist shape Item");
export const startProccess = createAction<number>("start proccess");
export const endProccess = createAction("end proccess");
