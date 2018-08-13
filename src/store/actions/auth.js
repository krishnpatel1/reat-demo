import axiosInstance from "../../axios-url";
import * as actionTypes from './actionTypes';

// login method
export const login =(email,password) =>{
    return dispatch => {
        // to show loader call this method
       dispatch(authStart());
       const authData={
           email:email,
           password:password
       }
       // call adminlogin method
       axiosInstance.post('/users/adminlogin',authData)
       .then(response => {
           if(response.data.status){
               // set localStorage on successfully login
                localStorage.setItem("token",response.data.token);
                dispatch(authSuccess(response.data));
           }else{
                dispatch(authFail(response.data));    
           }
       })
       .catch(err=>{
           dispatch(authFail({message:"something went wrong"}));
       })
    }
}
// call Auth start method
export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

// success method call
export const authSuccess = (authData) => {
    return {
        type:actionTypes.AUTH_SUCCESSS,
        token:authData.token
    }
}

// fail method call
export const authFail = (error) => {

    return {
        type:actionTypes.AUTH_FAIL,
        error:error.message
    }
}

// logout method call
export const logout = (error) => {
    localStorage.removeItem("token");
    return {
        type:actionTypes.LOGOUT,
    }
}

// on page referesh check localstorage for token validation
export const authStateCheck = () =>{
    return dispatch => {
        const token = { token : localStorage.getItem('token') };
        if(!token.token){
            dispatch(logout())
        }else{
            dispatch(authSuccess(token));
        }
    }
}