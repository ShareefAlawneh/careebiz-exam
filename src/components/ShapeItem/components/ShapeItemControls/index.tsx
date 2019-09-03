import React, { FunctionComponent, useContext } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { ShapeItemContext } from "../../ShapeItem";

const ShapeItemControls: FunctionComponent = () => {
    const { showControls, showUndo, handleDelete, handleUndoClick, handleEditClick, isEdit, handleDoneClick } = useContext(ShapeItemContext);
    return (
        <>
            {showControls && !showUndo && !isEdit && <EditDeleteControls handleDelete={handleDelete} handleEditClick={handleEditClick} />}
            {showUndo && !isEdit && <UndoControl handleUndoClick={handleUndoClick} />}
            {isEdit && <DoneControl handleDoneClick={handleDoneClick} />}
        </>
    );
}

const EditDeleteControls = (props: any) => {
    return (
        <div>
            <Button onClick={props.handleEditClick}>
                <EditIcon titleAccess="edit" color="primary" />
            </Button>
            <Button onClick={props.handleDelete}>
                <DeleteIcon titleAccess="delete" color="primary" />
            </Button>
        </div>
    )
}

const UndoControl = (props: any) => {
    return (
        <Button onClick={props.handleUndoClick}>
            <Typography>Undo</Typography>
        </Button>
    )
}

const DoneControl = (props) => {
    return (
        <Button onClick={props.handleDoneClick}>
            <Typography>Done</Typography>
        </Button>
    )
}

export default ShapeItemControls;