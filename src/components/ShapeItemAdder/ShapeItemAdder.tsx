import React, { FunctionComponent, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { WithStyles } from '@material-ui/styles';
import DoneIcon from '@material-ui/icons/Done'
import AddIcon from '@material-ui/icons/Add'
import styles from './styles';

interface ShapeItemAdderProps {
    onAddItem: (name: string) => void;
    disabled: boolean
}

const ShapeItemAdder: FunctionComponent<ShapeItemAdderProps & WithStyles<typeof styles>> = ({ classes, onAddItem, disabled }) => {
    const [shapeName, setShapeName] = useState('');
    const [showAdder, setShowAdder] = useState(false);
    console.log("disabled", disabled)
    const handleAddItem = () => {
        if(!shapeName){
            return
        }
        setShowAdder(false);
        onAddItem(shapeName)
        setShapeName('')
    }
    return (
        <div className={classes.root}>
            {showAdder && <Paper className={classes.inputContainer}>
                <TextField value={shapeName} onChange={e => setShapeName(e.target.value)} />
                <div>
                    <Button onClick={handleAddItem}>
                        <DoneIcon titleAccess="done" className={classes.icon} color="primary" />
                    </Button>
                </div>
            </Paper>}
            <Fab disabled={showAdder || disabled} color="primary" aria-label="add" onClick={() => setShowAdder(true)}>
                <AddIcon />
            </Fab>
        </div>
    )
}


export default ShapeItemAdder;