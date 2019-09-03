import ShapeItemAdder from "./ShapeItemAdder";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { connect } from "react-redux";
import { Store } from "@careebiz/types";

const stylesHoc = withStyles(styles);
const mapStateToProps = (state: Store) => {
  return {
    disabled: state.main.hasInCompleteProccess
  };
};
export default connect(mapStateToProps)(stylesHoc(ShapeItemAdder));
