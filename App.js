import React from 'react';
import {compose} from "redux";
import {Provider} from "react-redux";
import store from './store/store'
import MainContainer from './MainContainer';


function App() {
    return (
        <Provider store={store}>
            <MainContainer></MainContainer>
        </Provider>
    );
}

export default compose()(App);
