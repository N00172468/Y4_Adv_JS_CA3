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
    withStyles 
} from '@material-ui/core';

import ArticlesForm from './articlesForm';

const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    }
});

const Articles = ({classes, ...props}) => {
    // const [x, setX] = useState(0);
    // setX(5);

    useEffect(() => {
        props.fetchAllArticles()
    }, []); // Similar to class' "ComponentDidMount"

    return(
        <Grid container>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <ArticlesForm />
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
    fetchAllArticles: actions.fetchAll
};
//props.fetchAllArticles

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Articles));