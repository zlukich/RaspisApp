import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import scheduleReducer from "./schedule-reducer";
import {authReducer} from "./auth-reducer";


let reducers = combineReducers(
    {
        schedule: scheduleReducer,
        auth: authReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;

window.store = store
