import { users } from '../PreloadData';
import {ADD_ITEM, DELETE_ITEM} from '../actions/ActionTypes';

const initialState = users();

const table_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, {
                id: action.id,
                firstname: action.firstname,
                lastname: action.lastname,
                email: action.email
            }]
        case DELETE_ITEM:
            return state.filter((user) => user.id !== action.id)
        default:
            return state;
    }
}

export { table_reducer };