import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import BottomTab from './components/BottomTabNavigator';
import {compose} from "redux";
import {Provider} from "react-redux";
import store from './store/store'


function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomTab/>
            </NavigationContainer>
        </Provider>
    );
}

export default compose()(App);
