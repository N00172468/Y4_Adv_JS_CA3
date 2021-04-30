import api from './api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

// -------- React Action via Redux-Thunk: --------
// Fetch All Data Operation:
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

// Create Operation:
export const create = (data, onSuccess) => dispatch => {
    api.article().create(data)
    .then(res => {
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        });
        onSuccess();
    })
    .catch(err => console.log(err));
};

// Update Operation:
export const update = (id, data, onSuccess) => dispatch => {
    api.article().update(id, data)
    .then(res => {
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: res.data
        });
        onSuccess();
    })
    .catch(err => console.log(err));
};

// Delete Operation:
export const remove = (id, onSuccess) => dispatch => {
    api.article().delete(id)
    .then(res => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        });
        onSuccess();
    })
    .catch(err => console.log(err));
};