import ShapeForm from "./ShapeForm";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Store } from "@careebiz/types";
import {
  editShapeItemShape,
  deleteShapeItem,
  editShapeItemName,
  addShapeItem,
  startProccess,
  endProccess
} from "@careebiz/pages/Main/ducks/actions";
const stylesHoc = withStyles(styles);

const mapStateToProps = (state: Store) => {
  return {
    shapes: state.main.shapes,
    disabledSelect: !state.main.hasInCompleteProccess,
    selectedShape: state.main.selectedShape
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      editShapeItemShape,
      deleteShapeItem,
      editShapeItemName,
      addShapeItem,
      startProccess,
      endProccess
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stylesHoc(ShapeForm));
