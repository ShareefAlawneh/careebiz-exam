import { useReducer } from "react";

export interface ShapeItemState {
  showControls: boolean;
  showUndo: boolean;
  isEdit: boolean;
}
export const defaultState: ShapeItemState = {
  showControls: false,
  showUndo: false,
  isEdit: false
};

export interface ShapItemStateDispatcher {
  key: "showUndo" | "isEdit" | "showControls";
  value: boolean;
}

function reducer(
  state: ShapeItemState,
  action: ShapItemStateDispatcher
): ShapeItemState {
  switch (action.key) {
    case "showUndo":
      return { ...state, showUndo: action.value };
    case "isEdit":
      return { ...state, isEdit: action.value };
    case "showControls":
      return { ...state, showControls: action.value };
    default:
      return defaultState;
  }
}

export const useShapeItemState = (): [
  ShapeItemState,
  React.Dispatch<ShapItemStateDispatcher>
] => {
  return useReducer(reducer, defaultState);
};
