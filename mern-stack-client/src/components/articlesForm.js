import React, {useEffect, useState, Fragment} from 'react';

import { 
    Button,
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
    },
    postBtn: {
        width: '97%'
    }
});

const ArticlesForm = ({classes, ...props}) => {
    // Validation Function:
    const validate = () => {
        
    };

    // Using "UseForm" component to call out reusable form operations:
    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    }

    return(
        // Back-ticks are used to be able to call multiple classes
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
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

            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.postBtn}
            >
                Submit
            </Button>
        </form>
    );
};

export default withStyles(styles)(ArticlesForm);