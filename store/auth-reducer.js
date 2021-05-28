

let initialState={
    isAuthorized:false,
}


export const authReducer = (state=initialState, action)=>{
    switch (action.type){
        default:{
            return {...state};
        }
    }
}