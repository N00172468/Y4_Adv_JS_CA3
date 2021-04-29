// Reducer with switch statements:
import { ACTION_TYPES } from '../actions/article'

const initialState = {
    list: []
}

export const article = (state=initialState, action) => {
    switch (action.type) {
        // Fetching All Data Action:
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        // Creating Data Action:
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        
        // Updating Data Action:
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x._id == action.payload._id ? action.payload : x)
            }
        
        // Deleting Data Action:
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x._id != action.payload)
            }

        default:
            return state;
    }
}