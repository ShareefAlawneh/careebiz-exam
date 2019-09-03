import React, { FunctionComponent, useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { WithStyles } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import styles from './styles';
import classNames from 'classnames';
import { editShapeItem, deleteShapeItem } from './ducks/actions';
import { ShapeItem } from '@careebiz/types';

interface ShapeItemProps {
    shape: ShapeItem
    editShapeItem: typeof editShapeItem;
    deleteShapeItem: typeof deleteShapeItem;
}

const ShapeItem: FunctionComponent<ShapeItemProps & WithStyles<typeof styles>> = ({ shape, classes, ...rest }) => {
    const [showControls, setShowControls] = useState(false);
    const [showUndo, setShowUndo] = useState(false);
    const [noUndo, setNoUndo] = useState(true);
    const handleDelete =  () => {
        setShowUndo(true);
        setNoUndo(true);
        setTimeout(() => { 
            if(noUndo){
                setShowUndo(false);
                console.log("deleted")
                // rest.deleteShapeItem({shape})
            }else{
                console.log("undoed")

            }
         }, 5000);
    }
    const handleUndoClick = () => {
        setNoUndo(false);
        setShowUndo(false);
    }
    return (
        <Paper className={classes.root} onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
            <Typography>{shape.name}</Typography>
            {!showUndo ? <div className={classNames({
                [classes.hiddenActionsContainer]: !showControls,
                [classes.visibleActionsContainer]: showControls
            })}>
                <Button>
                    <EditIcon titleAccess="edit" className={classes.icon} color="primary" />
                </Button>
                <Button onClick={handleDelete}>
                    <DeleteIcon titleAccess="delete" className={classes.icon} color="primary" />
                </Button>
            </div> : <Button onClick={handleUndoClick}>
                    <Typography>Undo</Typography>
                </Button>}
        </Paper>
    )
}


export default ShapeItem;