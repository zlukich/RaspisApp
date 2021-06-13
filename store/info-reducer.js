
let initialState={
    infoTypes:[
    {
        Name: "Общие",
        News:
        [
        {
            Header:"New 1",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"New 2",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"New 3",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"New 4",
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
            Header:"Mmmmm",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Oaoaoao",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"New 3",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"New 4",
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
            Header:"Gachi",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Maximovvv sucks online without registration and sms",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"sukaaaaaaa",
            Description:"Very interesting",
            Link:""
        },
        {
            Header:"Blyat'",
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
