import {applyMiddleware, legacy_createStore,combineReducers} from 'redux';
import {reducer as AppReducer} from '../Redux/AppReducer/reducer'
// import {reducer as AuthReducer} from "./AuthReducer/reducer"
import thunk from 'redux-thunk';

// const rootReducer=combineReducers({AppReducer , AuthReducer})

const store = legacy_createStore(AppReducer, applyMiddleware(thunk));

export {store};

