

let initialState={
    isAuthorized:true,
}


export const authReducer = (state=initialState, action)=>{
    switch (action.type){
        default:{
            return {...state};
        }
    }
}