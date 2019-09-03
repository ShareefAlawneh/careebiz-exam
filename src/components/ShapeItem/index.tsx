import ShapeItem from './ShapeItem';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { bindActionCreators } from 'redux';
import {deleteShapeItem, editShapeItem} from './ducks/actions';
import {connect} from 'react-redux';

const stylesHoc = withStyles(styles);


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) =>  {
    return bindActionCreators({
        deleteShapeItem,
        editShapeItem
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(stylesHoc(ShapeItem));
