// Reducer with switch statements:
import { ACTION_TYPES } from '../actions/article'

const initialState = {
    list: []
}

export const article = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        default:
            return state;
    }
}