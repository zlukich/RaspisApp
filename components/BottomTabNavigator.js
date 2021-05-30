import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Info from '../screens/Info';
import Archive from '../screens/Archive';
import Profile from '../screens/Profile';
import ScheduleIcon from '../assets/nonact-schedule.svg';
import { View } from 'react-native';
import ScheduleContainer from "../screens/Schedule/ScheduleContainer";

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Schedule"
            inactiveColor="#111"
            activeColor="#074EE8"
            labeled={false}
            barStyle={{ backgroundColor: '#fff', borderTopColor: 'gray', borderTopWidth: 2 }}
        >
            <Tab.Screen
                name="Schedule"
                component={ScheduleContainer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar-month" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="information-outline" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Archive"
                component={Archive}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;