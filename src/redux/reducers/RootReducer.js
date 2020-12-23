import { auth_reducer } from './AuthReducer';
import { table_reducer } from './TableReducer';
import { combineReducers } from 'redux';

const root_reducer = combineReducers({
   auth_reducer , table_reducer
});

export default root_reducer;