import {createStore, combineReducers} from 'redux';
import registrationReducer from './registration-reducer';
import addressReducer from './address-reducer';
import categoriesReducer from './categories-reducer';

let reducers = combineReducers({
    email: registrationReducer,
    address: addressReducer,
    post: categoriesReducer
});

let store = createStore(reducers);
window.store = store;
export default store;