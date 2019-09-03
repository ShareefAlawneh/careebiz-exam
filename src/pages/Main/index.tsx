import Main from './Main';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { connect } from 'react-redux';
import { Store } from '@careebiz/types';
import { bindActionCreators } from 'redux';
import {persistShapeItem, endProccess, startProccess} from './ducks/actions';

const stylesHoc = withStyles(styles);
const mapSateToProps = (state: Store) => ({selectedDrawingMode: state.main.selectedShape})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        persistShapeItem,
        endProccess,
        startProccess
    }, dispatch)
}
export default connect(mapSateToProps,mapDispatchToProps)(stylesHoc(Main));