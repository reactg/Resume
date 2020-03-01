const CATEGORY1_TEXT = 'CATEGORY1-TEXT';
const CATEGORY2_TEXT = 'CATEGORY2-TEXT'
const CATEGORY3_TEXT = 'CATEGORY3-TEXT';

let initialState = {
        category1: '',
        category2: '',
        category3: '',
}

const categoriesReducer = (state = initialState, action) => {
    
    switch (action.type){
        case CATEGORY1_TEXT:
        state.category1 = action.newText;
        return state;
    }
    switch (action.type){
        case CATEGORY2_TEXT:
        state.category2 = action.newText;
        return state;
    }
    switch (action.type){
        case CATEGORY3_TEXT:
        state.category3 = action.newText;
        return state;
    default:
        return state;
    } 
}

const category1ActionCreator = (text) => {return ({type: CATEGORY1_TEXT, newText: text});}
const category2ActionCreator = (text) => {return ({type: CATEGORY2_TEXT, newText: text});}
const category3ActionCreator = (text) => {return ({type: CATEGORY3_TEXT, newText: text});}

export default categoriesReducer;