import React, {useEffect, useState, Fragment} from 'react';

import { 
    TextField,
    withStyles
 } from '@material-ui/core';

const initialFieldValues = {
    title: '',
    content: ''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: 200
        }
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

const ArticlesForm = ({classes, ...props}) => {
    const [values, setValues] = useState(initialFieldValues);

    return(
        // Back-ticks are used to be able to call multiple classes
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <TextField
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={values.title}
            />

            <TextField
                name="content"
                variant="outlined"
                label="Content"
                fullWidth
                multiline
                rows="5"
                value={values.content}
            />
        </form>
    );
};

export default withStyles(styles)(ArticlesForm);