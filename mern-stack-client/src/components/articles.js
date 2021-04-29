import React, {useEffect, useState} from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/article';

const Articles = (props) => {
    // const [x, setX] = useState(0);
    // setX(5);

    useEffect(() => {

    }, []); // Similar to class' "ComponentDidMount"

    return(
        <div>
            <h1>Testing Article List Component</h1>
        </div>
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

export default connect(mapStateToProps, mapActionToProps)(Articles);