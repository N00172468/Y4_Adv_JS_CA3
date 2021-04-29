export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

// React Action via Redux-Thunk
export const fetchAll = () => dispatch => {
    //  Get req.
    dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: []
    });
}

// const fetchAll = {
//     type: 'FETCH_ALL',
//     payload: []
// }

// dispatch(fetchAll)