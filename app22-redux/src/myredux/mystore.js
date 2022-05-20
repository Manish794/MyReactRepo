import { createStore, combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
    studStateData: studentReducer,
    empStateData: employeeReducer
});

const mystore = createStore(rootReducer);
export default mystore
