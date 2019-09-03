import { createStyles } from '@material-ui/core/styles';

export default createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
       
        
    },
    selectContainer: {
        width: '100%'
    },
    itemsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    }
})