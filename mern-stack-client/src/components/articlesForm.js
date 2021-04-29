import React, {useEffect, useState, Fragment} from 'react';

import { TextField } from '@material-ui/core';

const initialFieldValues = {
    title: '',
    content: ''
}

const ArticlesForm = (props) => {
    const [values, setValues] = useState(initialFieldValues);

    return(
        <form autoComplete="off" noValidate>
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
                value={values.content}
            />
        </form>
    );
};

export default ArticlesForm;