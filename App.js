import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './components/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
