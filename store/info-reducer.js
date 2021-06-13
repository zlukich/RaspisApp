
let initialState={
    infoTypes:[
    {
        Name: "Общие",
        News:
        [
        {
            Header:"General new 1",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"General new 2",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"General new 3",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"General new 4",
            Description:"Very interesting",
            Link:""
        }
        ]
    },
    {
        Name: "Факультет",
        News:
        [
        {
            Header:"Faculty new",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Faculty new 2",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Faculty new 3",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Faculty new 4",
            Description:"Very interesting",
            Link:""
        }
        ]
    },
    {
        Name: "Группа",
        News:
        [
        {
            Header:"Group new",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Group new 2",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Group new 3",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Group new 4",
            Description:"Very interesting",
            Link:""
        }
        ]
    }
    ]
}


export const infoReducer = (state=initialState, action)=>{
    switch (action.type){
        default:{
            return {...state};
        }
    }
}
