import React, { Component } from "react";
import { WithStyles } from "@material-ui/styles";
import styles from "./styles";
import ShapeItemAdder from "../ShapeItemAdder";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { drawingModes } from "../Map/Map";
import { ShapeItem as ShapeItemInterface } from "@careebiz/types";
import {
  editShapeItemShape,
  deleteShapeItem,
  editShapeItemName,
  addShapeItem,
  endProccess,
  startProccess
} from "@careebiz/pages/Main/ducks/actions";
import ShapeItem from "../ShapeItem";

interface ShapeFormProps {
  shapes: ShapeItemInterface[];
  endProccess: typeof endProccess;
  startProccess: typeof startProccess;
  editShapeItemShape: typeof editShapeItemShape;
  addShapeItem: typeof addShapeItem;
  deleteShapeItem: typeof deleteShapeItem;
  editShapeItemName: typeof editShapeItemName;
  disabledSelect: boolean;
  selectedShape: string;
}

interface ShapeFormState {
  activeShapeItem: ShapeItemInterface;
}

const initialShape: ShapeItemInterface = {
  id: -1,
  name: "",
  type: undefined,
  meta: {}
};

export default class ShapeForm extends Component<
  ShapeFormProps & WithStyles<typeof styles>,
  ShapeFormState
> {
  initialState: ShapeFormState = {
    activeShapeItem: initialShape
  };

  state: ShapeFormState = this.initialState;

  handleAddItem = (name: string) => {
    const length = this.props.shapes.length;
    const id = length ? this.props.shapes[length - 1].id + 1 : length + 1;
    this.props.startProccess(id);
    const shape: ShapeItemInterface = {
      ...initialShape,
      name,
      id
    };
    this.setState({ activeShapeItem: shape }, () => {
      this.props.addShapeItem({ shape: this.state.activeShapeItem });
    });
  };

  handleEditClicked = (id: number) => {
    this.props.startProccess(id);
    const shapeItem = this.props.shapes.find(shape => shape.id === id);
    if (!shapeItem) {
      return;
    }

    this.setState({ activeShapeItem: shapeItem });
  };

  handleEditShapeItem = (name: string, id: number) => {
    this.props.editShapeItemName({
      id,
      name
    });
  };

  handleSelectShapeType = e => {
    const activeShapeItem = {
      ...this.state.activeShapeItem,
      type: e.target.value
    };
    this.props.editShapeItemShape({ shape: activeShapeItem });
  };

  handleDoneClick = () => {
    this.props.endProccess();
  };

  handleDeleteItem = (id: number) => {
    this.props.deleteShapeItem(id);
    this.props.endProccess();
  };

  render() {
    const { classes, shapes, disabledSelect } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.itemsContainer}>
          {shapes.map(shape => (
            <ShapeItem
              key={shape.id}
              id={shape.id}
              name={shape.name}
              onNameChange={this.handleEditShapeItem}
              onDelete={this.handleDeleteItem}
              onDone={this.handleDoneClick}
              onEditClicked={this.handleEditClicked}
            />
          ))}
          <ShapeItemAdder onAddItem={this.handleAddItem} />
        </div>
        <div className={classes.selectContainer}>
          <Select
            title={"select shape"}
            className={classes.selectContainer}
            disabled={disabledSelect}
            value={this.props.selectedShape}
            onChange={this.handleSelectShapeType}
          >
            <MenuItem value=""></MenuItem>
            {drawingModes.map(mode => (
              <MenuItem key={mode} value={mode}>
                {mode}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    );
  }
}
