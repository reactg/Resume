const EMAIL_TEXT = 'EMAIL-TEXT';
const PASSWORD_TEXT = 'PASSWORD-TEXT'
const PASSWORD_CONFIRM_TEXT = 'PASSWORD-CONFIRM-TEXT';

let initialState = {
        email: '',
        password: '',
        passwordConfirm: '',
}

const registrationReducer = (state = initialState, action) => {
    
    switch (action.type){
        case EMAIL_TEXT: 
        state.email = action.newText;
        return state;
    }
    switch (action.type){
        case PASSWORD_TEXT:
        state.password = action.newText;
        return state;
    }
    switch (action.type){
        case PASSWORD_CONFIRM_TEXT:
        state.passwordConfirm = action.newText;
        return state;
    default:
        return state;
    } 
}

const registrationEmailActionCreator = (text) => {return ({type: EMAIL_TEXT, newText: text});}
const registrationPasswordActionCreator = (text) => {return ({type: PASSWORD_TEXT, newText: text});}
const registrationPasswordConfirmActionCreator = (text) => {return ({type: PASSWORD_CONFIRM_TEXT, newText: text});}

export default registrationReducer;