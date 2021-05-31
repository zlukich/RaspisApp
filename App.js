import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import BottomTab from './components/BottomTabNavigator';
import {compose} from "redux";
import {Provider} from "react-redux";
import store from './store/store'
import Login from "./screens/Login/Login";
import Registration from './screens/Registration/Registration';


function App() {
    return (
        <Provider store={store}>
            {store.getState().auth.isAuthorized ? <NavigationContainer>
                <BottomTab/>
            </NavigationContainer> : <Registration/>}
        </Provider>
    );
}

export default compose()(App);
