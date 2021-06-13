
let initialState = {
    infoTypes: [
        {
            Name: "Общие",
            News:
                [
                    {
                        Header: "Общая новость #1",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Общая новость #2",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Общая новость #3",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Общая новость #4",
                        Description: "Very interesting",
                        Link: ""
                    }
                ]
        },
        {
            Name: "Факультет",
            News:
                [
                    {
                        Header: "Новость факультета #1",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Новость факультета #2",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Новость факультета #3",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Новость факультета #4",
                        Description: "Very interesting",
                        Link: ""
                    }
                ]
        },
        {
            Name: "Группа",
            News:
                [
                    {
                        Header: "Новость группы #1",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Новость группы #2",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Новость группы #3",
                        Description: "Very interesting",
                        Link: ""
                    },
                    {
                        Header: "Новость группы #4",
                        Description: "Very interesting",
                        Link: ""
                    }
                ]
        }
    ]
}


export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return { ...state };
        }
    }
}
