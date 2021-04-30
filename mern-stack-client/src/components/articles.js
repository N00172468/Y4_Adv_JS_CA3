import React, {useEffect, useState, Fragment} from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/article';

import { 
    Divider,
    Grid, 
    List, 
    ListItem, 
    ListItemText, 
    Paper,
    Typography,
    Button,
    withStyles 
} from '@material-ui/core';
import {DeleteSweep} from '@material-ui/icons';
import ButterToast, {Cinnamon} from 'butter-toast';

import ArticlesForm from './articlesForm';

const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: 'end'
    }
});

const Articles = ({classes, ...props}) => {
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllArticles()
    }, []); // Similar to class' "ComponentDidMount"

    const onDelete = id => {
        const onSuccess = () => {
            // window.alert('Submit Successful!');
            ButterToast.raise({
                content:<Cinnamon.Crisp title="Article" content="Deleted Successfully" scheme={Cinnamon.Crisp.SCHEME_PURPLE} icon={DeleteSweep}/>
            });
        }

        if (window.confirm('Are you sure?'))
            props.deleteArticles(id, onSuccess);
    }

    return(
        <Grid container>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <ArticlesForm {...{currentId, setCurrentId}} />
                </Paper>
            </Grid>

            <Grid item xs={7}>
                <Paper className={classes.paper}>
                    <List>
                        {
                            props.articleList.map((record, index) => {
                                return(
                                    <Fragment key={index}>
                                        <ListItem>
                                            <ListItemText>
                                                <Typography variant="h5">
                                                    { record.title }
                                                </Typography>
                                                <div>
                                                    { record.content }
                                                </div>

                                                <div className={classes.actionDiv}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        size="small"
                                                        className={classes.smMargin}
                                                        onClick={()=>setCurrentId(record._id)}
                                                    >
                                                        Edit
                                                    </Button>
                                                    
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        size="small"
                                                        className={classes.smMargin}
                                                        onClick={()=>onDelete(record._id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li" />
                                    </Fragment>
                                )
                            })
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
    );
};

// -------- Mapping Functions: --------
const mapStateToProps = state => ({
    articleList: state.article.list
});

const mapActionToProps = {
    fetchAllArticles: actions.fetchAll,
    deleteArticles: actions.remove
};
//props.fetchAllArticles

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Articles));