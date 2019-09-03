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

}

const ShapeItemAdder: FunctionComponent<ShapeItemAdderProps & WithStyles<typeof styles>> = ({ classes }) => {
    const [shapeName, setShapeName] = useState('');
    const [showAdder, setShowAdder] = useState(false);
    return (
        <div className={classes.root}>
            {showAdder && <Paper className={classes.inputContainer}>
                <TextField value={shapeName} onChange={e => setShapeName(e.target.value)} />
                <div>
                    <Button onClick={() => setShowAdder(false)}>
                        <DoneIcon titleAccess="done" className={classes.icon} color="primary" />
                    </Button>
                </div>
            </Paper>}
            <Fab disabled={showAdder} color="primary" aria-label="add" onClick={() => setShowAdder(true)}>
                <AddIcon />
            </Fab>
        </div>
    )
}


export default ShapeItemAdder;