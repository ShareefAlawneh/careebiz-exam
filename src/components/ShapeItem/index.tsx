import ShapeItem from "./ShapeItem";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const stylesHoc = withStyles(styles);

export default stylesHoc(ShapeItem);
