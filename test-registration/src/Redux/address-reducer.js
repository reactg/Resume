const COUNTRY_TEXT = 'COUNTRY-TEXT';
const CITY_TEXT = 'CITY-TEXT'
const ADDRESS_TEXT = 'ADDRESS-TEXT';

let initialState = {
        country: '',
        city: '',
        address: '',
}

const addressReducer = (state = initialState, action) => {
    
    switch (action.type){
        case COUNTRY_TEXT: 
        state.country = action.newText;
        return state;
    }
    switch (action.type){
        case CITY_TEXT:
        state.city = action.newText;
        return state;
    }
    switch (action.type){
        case ADDRESS_TEXT:
        state.address = action.newText;
        return state;
    default:
        return state;
    } 
}

const countryActionCreator = (text) => {return ({type: COUNTRY_TEXT, newText: text});}
const cityActionCreator = (text) => {return ({type: CITY_TEXT, newText: text});}
const addressActionCreator = (text) => {return ({type: ADDRESS_TEXT, newText: text});}

export default addressReducer;