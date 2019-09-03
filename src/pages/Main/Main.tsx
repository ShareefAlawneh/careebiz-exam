import React, { Component } from "react";
import { persistShapeItem, endProccess } from "./ducks/actions";
import Map from "@careebiz/components/Map";
import ShapeForm from "@careebiz/components/ShapeForm";
import { WithStyles } from "@material-ui/styles/withStyles";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
interface MainProps {
  selectedDrawingMode: string;
  persistShapeItem: typeof persistShapeItem;
  endProccess: typeof endProccess;
}

export default class Main extends Component<
  MainProps & WithStyles<typeof styles>
> {
  handleAddShape = meta => {
    this.props.persistShapeItem(meta);
    this.props.endProccess();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.mapContainer}>
          <Typography variant="h5">Map</Typography>
          <Map
            onAddShape={this.handleAddShape}
            selectedDrawingMode={this.props.selectedDrawingMode}
          />
        </div>
        <div className={classes.formContainer}>
          <Typography variant="h5">Areas</Typography>
          <ShapeForm />
        </div>
      </div>
    );
  }
}
