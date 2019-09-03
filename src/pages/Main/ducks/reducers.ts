import { ShapeItem } from "@careebiz/types";
import { createReducer } from "redux-act";
import {
  editShapeItemShape,
  deleteShapeItem,
  persistShapeItem,
  editShapeItemName,
  addShapeItem,
  startProccess,
  endProccess
} from "./actions";
import { ReducersMapObject } from "redux";
import produce from "immer";

export interface MainReducer {
  shapes: ShapeItem[];
  hasInCompleteProccess: boolean;
  selectedShape: string;
  activeItem: number;
}

const defaultState: MainReducer = {
  shapes: [],
  hasInCompleteProccess: false,
  selectedShape: "",
  activeItem: -1
};

const mainReducer = createReducer({}, defaultState)
  .on(addShapeItem, (state, payload) => {
    return {
      ...state,
      shapes: state.shapes.concat(payload.shape)
    };
  })
  .on(editShapeItemName, (state, payload) => {
    const newShapes = produce<ShapeItem[]>(state.shapes, draftedState => {
      const itemIndex = state.shapes.findIndex(
        shape => shape.id === payload.id
      );
      draftedState[itemIndex].name = payload.name;
    });
    return {
      ...state,
      shapes: newShapes
    };
  })
  .on(editShapeItemShape, (state, payload) => {
    const shapeToEditIndex = state.shapes.findIndex(
      shape => shape.id === payload.shape.id
    );
    const shapes = produce(state.shapes, draftedState => {
      if (draftedState[shapeToEditIndex].meta.setMap) {
        draftedState[shapeToEditIndex].meta.setMap(null);
      }
      draftedState[shapeToEditIndex] = payload.shape;
    });

    return {
      ...state,
      shapes,
      selectedShape: payload.shape.type ? payload.shape.type.toString() : ""
    };
  })
  .on(persistShapeItem, (state, payload) => {
    const newShapes = produce(state.shapes, draftedState => {
      const shapeIndex = state.shapes.findIndex(
        shape => shape.id === state.activeItem
      );
      draftedState[shapeIndex].meta = payload;
    });
    return {
      ...state,
      shapes: newShapes
    };
  })
  .on(deleteShapeItem, (state, payload) => {
    const shapeToDeleteIndex = state.shapes.findIndex(
      shape => shape.id === payload
    );
    const shapes = produce(state.shapes, draftedState => {
      if (draftedState[shapeToDeleteIndex].meta.setMap) {
        draftedState[shapeToDeleteIndex].meta.setMap(null);
      }
      draftedState.splice(shapeToDeleteIndex, 1);
    });
    return {
      ...state,
      shapes
    };
  })
  .on(startProccess, (state, payload) => {
    return {
      ...state,
      hasInCompleteProccess: true,
      activeItem: payload
    };
  })
  .on(endProccess, (state, payload) => {
    return {
      ...state,
      hasInCompleteProccess: false,
      selectedShape: "",
      activeItem: -1
    };
  });

const MainReducer: ReducersMapObject = {
  main: mainReducer
};

export default MainReducer;
