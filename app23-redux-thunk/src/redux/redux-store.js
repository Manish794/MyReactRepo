import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from "axios";

import CommitsReducer from './commits/CommitsReducer';

const rootReducer = combineReducers({
    commitStateData: CommitsReducer
});

const mystore = createStore(rootReducer, applyMiddleware(logger, thunk.withExtraArgument(axios)));

export default mystore