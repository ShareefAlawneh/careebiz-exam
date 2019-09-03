import React, { FunctionComponent, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { WithStyles } from "@material-ui/styles";
import styles from "./styles";
import { ShapeItem } from "@careebiz/types";
import {
  useShapeItemState,
  ShapeItemState,
  defaultState
} from "./hooks/useShapeItemState";
import ShapeItemControls from "./components/ShapeItemControls";
import TextField from "@material-ui/core/TextField";

interface ShapeItemProps {
  id: number;
  name: string;
  onNameChange: (value: string, id: number) => void;
  onDelete: (id: number) => void;
  onDone: () => void;
  onEditClicked: (id: number) => void;
}
interface ShapeItemActions {
  handleDelete: () => void;
  handleUndoClick: () => void;
  handleEditClick: () => void;
  handleDoneClick: () => void;
}
export const ShapeItemContext = React.createContext<
  ShapeItemState & ShapeItemActions
>({
  ...defaultState,
  handleDelete: () => {},
  handleUndoClick: () => {},
  handleEditClick: () => {},
  handleDoneClick: () => {}
});

let deleteItemInterval;

const ShapeItem: FunctionComponent<
  ShapeItemProps & WithStyles<typeof styles>
> = ({ id, name, classes, onNameChange, onDelete, onDone, onEditClicked }) => {
  const [state, setState] = useShapeItemState();

  const handleDelete = () => {
    setState({ key: "showUndo", value: true });
    deleteItemInterval = setTimeout(() => {
      setState({ key: "showUndo", value: false });
      onDelete(id);
    }, 5000);
  };

  const handleEditClick = () => {
    onEditClicked(id);
    setState({ key: "isEdit", value: true });
  };

  const handleDoneClick = () => {
    setState({ key: "isEdit", value: false });
    onDone();
  };

  const handleUndoClick = () => {
    setState({ key: "showUndo", value: false });
    clearTimeout(deleteItemInterval);
  };

  return (
    <Paper
      className={classes.root}
      onMouseEnter={() => setState({ key: "showControls", value: true })}
      onMouseLeave={() => setState({ key: "showControls", value: false })}
    >
      {state.isEdit ? (
        <TextField
          value={name}
          onChange={({ target: { value } }) => onNameChange(value, id)}
        ></TextField>
      ) : (
        <Typography>{name}</Typography>
      )}
      <ShapeItemContext.Provider
        value={{
          ...state,
          handleDelete,
          handleUndoClick,
          handleEditClick,
          handleDoneClick
        }}
      >
        <ShapeItemControls />
      </ShapeItemContext.Provider>
    </Paper>
  );
};

export default ShapeItem;
