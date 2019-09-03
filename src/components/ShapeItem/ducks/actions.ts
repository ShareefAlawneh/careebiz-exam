import {createAction} from 'redux-act';
import { ShapeItem } from '@careebiz/types';

interface EditShapeItemPayload {
    shape: ShapeItem;
}

export const editShapeItem = createAction<EditShapeItemPayload>("edit shape item");
export const deleteShapeItem = createAction<EditShapeItemPayload>("delete shape item");