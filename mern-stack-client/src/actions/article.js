import api from './api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

// React Action via Redux-Thunk
export const fetchAll = () => dispatch => {
    //  Get req.
    api.article().fetchAll()
    .then(res => {
        console.log(res);

        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}

// const fetchAll = {
//     type: 'FETCH_ALL',
//     payload: []
// }

// dispatch(fetchAll)