import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/article';
import { 
    Button,
    TextField,
    withStyles
 } from '@material-ui/core';
 import {AssignmentTurnedIn} from '@material-ui/icons';
 import ButterToast, {Cinnamon} from 'butter-toast';
 import useForm from './useForm';

const initialFieldValues = {
    title: '',
    content: ''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
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
    // Displaying the selected article for edit in the form:
    useEffect(() => {
        if (props.currentId != 0){
            setValues({
                ...props.articleList.find(x => x._id == props.currentId)
            });

            setErrors({})
        }
    }, [props.currentId]);

    // Validation Function:
    const validate = () => {
        let temp = {...errors}
        
        temp.title = values.title?"":"A title is required!"
        temp.content = values.content?"":"Contents are required!"

        setErrors({
            ...temp
        });
        return Object.values(temp).every(x => x == "");
    };

    // Using "UseForm" component to call out reusable form operations:
    var {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    } = useForm(initialFieldValues, props.setCurrentId);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);

        const onSuccess = () => {
            // window.alert('Submit Successful!');
            ButterToast.raise({
                content:<Cinnamon.Crisp title="Article" content="Submitted Successfully" scheme={Cinnamon.Crisp.SCHEME_PURPLE} icon={AssignmentTurnedIn}/>
            });
            resetForm();
        }

        if (validate()) {
            // If current ID doesn't exist, CREATE new article, else EDIT chosen article:
            if (props.currentId == 0)
                props.createArticle(values, onSuccess);
            else
                props.updateArticle(props.currentId, values, onSuccess);
        }
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
                {...(errors.title && {error:true, helperText:errors.title})} // Material UI error display method using "validate" funct. above
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
                {...(errors.content && {error:true, helperText:errors.content})}
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

// -------- Mapping Functions: --------
const mapStateToProps = state => ({
    articleList: state.article.list
});

const mapActionToProps = {
    createArticle: actions.create,
    updateArticle: actions.update
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ArticlesForm));