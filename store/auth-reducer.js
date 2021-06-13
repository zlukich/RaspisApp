import { authAPI } from "../api/api";


const SET_AUTHORIZED ='auth-reducer/SET_AUTHORIZED';
const GET_SESSIONID = 'auth-reducer/GET_SESSIONID';
let initialState={
    isAuthorized:false,
    email:'',
    password:'',
    SessionID:''
}


export const authReducer = (state=initialState, action)=>{
    switch (action.type){
        case SET_AUTHORIZED:{
            return{...state, isAuthorized: action.isAuthorized, email: action.email, password: action.password}
        }
        case GET_SESSIONID:{
            return {...state, SessionID:action.SessionID}
        }
        default:{
            return {...state};
        }
    }
}

export const setAuthorizedAC = payload =>({type: SET_AUTHORIZED, email: payload.email, password: payload.password, isAuthorized: true})
export const getSessionIDAC = payload=>({type:GET_SESSIONID,SessionID:payload})
export const registrationThunk = (payload) => async dispatch=>{
    if(payload){
        await authAPI.registration(payload).catch(err=>{
            alert(err);
            console.log(err);
        })
    }
}

export const loginThunk = payload => async dispatch =>{
    await authAPI.login(payload).then(result =>{
        dispatch(setAuthorizedAC(payload));
        dispatch(getSessionIDAC(result));
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}