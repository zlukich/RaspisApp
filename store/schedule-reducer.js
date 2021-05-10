import {scheduleAPI} from "../api/api";


let GET_CURRENT_WEEK_SCHEDULE = 'schedule-reducer.js/GET_CURRENT_WEEK_SCHEDULE';

let initialState={
    days:[{
        dayName: 'Monday',
        dayDate:'10.05.2021',
        subjectsList:[
            {
                subjectName: 'Programming',
                subjectType: 'Lecture',
                subjectTheme: 'Introduction to OOP',
                startTime: '9:30',
                endTime: '10:50',
                lecturerName: 'Vasiliy Vasilievich Vasiliev',
            },
            {
                subjectName: 'Mathematics',
                subjectType: 'Practice',
                subjectTheme: 'Multiplying',
                startTime: '11:20',
                endTime: '12:40',
                lecturerName: 'Petr Petrovich Petrov',
            }
        ]
    },
        {
            dayName: 'Tuesday',
            dayDate:'11.05.2021',
            subjectsList:[
                {
                    subjectName: 'Physics',
                    subjectType: 'Module>',
                    subjectTheme: 'Big Bang Theory',
                    startTime: '8:00',
                    endTime: '9:20',
                    lecturerName: 'Ivan Ivanovich Ivanov',
                },
            ]
        }
    ]
}

export const scheduleReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_CURRENT_WEEK_SCHEDULE:{
            return {...state, ...action.payload}
        }
        default:{
            return {...state};
        }
    }
}


export let getCurrentWeekScheduleAC = (payload) =>({type:GET_CURRENT_WEEK_SCHEDULE,payload})

export let getCurrentWeekScheduleThunk = () =>{
    return async (dispatch) => {
        let payload = await scheduleAPI.sendData();
        dispatch(getCurrentWeekScheduleAC([{
            dayName: 'Monday',
            dayDate:'10.05.2021',
            subjectsList:[
                {
                    subjectName: 'Programming',
                    subjectType: 'Lecture',
                    subjectTheme: 'Introduction to OOP',
                    startTime: '9:30',
                    endTime: '10:50',
                    lecturerName: 'Vasiliy Vasilievich Vasiliev',
                },
                {
                    subjectName: 'Mathematics',
                    subjectType: 'Practice',
                    subjectTheme: 'Multiplying',
                    startTime: '11:20',
                    endTime: '12:40',
                    lecturerName: 'Petr Petrovich Petrov',
                }
            ]
        },
            {
                dayName: 'Tuesday',
                dayDate:'11.05.2021',
                subjectsList:[
                    {
                        subjectName: 'Physics',
                        subjectType: 'Module>',
                        subjectTheme: 'Big Bang Theory',
                        startTime: '8:00',
                        endTime: '9:20',
                        lecturerName: 'Ivan Ivanovich Ivanov',
                    },
                ]
            }
        ]))
    }
}


export default scheduleReducer;