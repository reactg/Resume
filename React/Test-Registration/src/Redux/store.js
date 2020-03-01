import registrationReducer from './registration-reducer';
import addressReducer from './address-reducer';
import categoriesReducer from './categories-reducer';

let store = {
    
    _state:{
        post: {
            email: 'YO',
            password: '',
            passwordconfirm: '',
        },
    },
    getState() {
            return this._state
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },
        dispatch(action) {
            this._state.post = registrationReducer(this._state.post, action);
            this._state.post = addressReducer(this._state.post, action);
            this._state.post = categoriesReducer(this._state.post, action);

            this._callSubscriber(this._state);
        }
}

window.state = state;

export default store;


let store = {

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.post = registrationReducer(this._state.post, action);
        this._state.post = addressReducer(this._state.post, action);
        this._state.post = categoriesReducer(this._state.post, action);

        this._callSubscriber(this._state);
    }
}