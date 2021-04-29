import React, {useEffect, useState, Fragment} from 'react';

import { 
    TextField,
    withStyles
 } from '@material-ui/core';

 import useForm from './useForm';

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
    var {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues);

    return(
        // Back-ticks are used to be able to call multiple classes
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <TextField
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={values.title}
                onChange={handleInputChange}
            />

            <TextField
                name="content"
                variant="outlined"
                label="Content"
                fullWidth
                multiline
                rows="5"
                value={values.content}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default withStyles(styles)(ArticlesForm);