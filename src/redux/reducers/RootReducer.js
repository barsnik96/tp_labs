import { auth_reducer } from './AuthReducer';
import { table_reducer } from './TableReducer';
import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from '../../thunk/reducers/items';

const root_reducer = combineReducers({
    auth_reducer,
    table_reducer,
    items,
    itemsHasErrored,
    itemsIsLoading
});

export default root_reducer;