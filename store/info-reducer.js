
let initialState={
    infoTypes:[
    "Общие",
    "Факультет",
    "Группа"
    ]
}


export const infoReducer = (state=initialState, action)=>{
    switch (action.type){
        default:{
            return {...state};
        }
    }
}

 export let getInfoTypeName = () =>{
    return ()=>{
		let payload = initialState;
    }
}