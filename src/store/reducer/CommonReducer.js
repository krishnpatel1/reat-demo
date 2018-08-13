import * as actionsTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState ={
    token:null,
    error:null,
    loading:false
}
// on auth start loading should be start
const authStart = (state,action) => {
    return updateObject(state,{error:null,loading:true});
}

// on success of login make update state with token
const authSuccess = (state,action) => {
    return updateObject(state,{
        error:null,
        loading:false
    });
}

//// on auth fail dispaly error message
const authFail = (state,action) => {
    return updateObject(state,{
        error:action.error,
        loading:false
    });
}
// make a switch case and call method depend on action type
const reducer =(state=initialState,action) => {
    switch(action.type){
        case actionsTypes.AUTH_START : return authStart(state,action);
        case actionsTypes.AUTH_SUCCESSS : return authSuccess(state,action);
        case actionsTypes.AUTH_FAIL : return authFail(state,action);
        default:
        return state;
    }
}

export default reducer;