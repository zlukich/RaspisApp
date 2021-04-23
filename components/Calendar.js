
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Switch,Button,FlatList,ActivityIndicator } from 'react-native';
import { configureStore } from '@reduxjs/toolkit'
import Header from './Header'
import Subject from './Subject'
import ChangeDay from './ChangeDay'
import Footer from './Footer'
import {Divider} from 'react-native-elements'
export const Calendar = () => {
    return (
        <View>
        <Header value='Розклад занятть' />
      <ChangeDay/>
      <Subject value='Математика'/>
      <Divider/>
      <Subject value='Английский'/>
      <Divider/>
      <Subject value='Сиспрог'/>
      <Divider/>
      
        {/* <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )
          }
        /> */}
     <Footer value='Some Value'></Footer>
     </View>
    )
}
export default Calendar