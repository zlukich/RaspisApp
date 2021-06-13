import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import BottomTab from '../components/BottomTabNavigator';
import Login from '../screens/Login/Login'

const Main = (props) => {
        return (
                <>
            {props.isAuth ? <NavigationContainer>
                <BottomTab/>
            </NavigationContainer> : <Login/>}
            </>
        )
}

export default Main