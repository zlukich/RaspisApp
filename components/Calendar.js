
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Switch,Button,FlatList,ActivityIndicator } from 'react-native';
import { configureStore } from '@reduxjs/toolkit'
import Header from './Header'
import Subject from './Subject'
import ChangeDay from './ChangeDay'
import Footer from './Footer'
import {Divider} from 'react-native-elements'
import Subjects from './Subjects';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    }})

export const Calendar = ({navigation}) => {

    const [subjects,setSubjects] = useState(...[],{id:1,subjName:'Math',subjType:'Lecture',subjRoom:'1',subjTeacher:'Malakhov',subjTime:'smth'})
    console.log(subjects)
    return (
        <View style={styles.container}>
        <Header value='Розклад занятть' />
      <ChangeDay/>
      <Subject value='Математика'/>
      <Divider/>
      <Subject value='Английский'/>
      <Divider/>
      <Subject value='Сиспрог'/>
      <Divider/>
      
      {/* <Subjects subjects={subjects}></Subjects> */}
        <FlatList
          data={subjects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            
            <Subject value={item.subjName}/>
          )
          }
        />  
     <Footer value='Some Value' navigation={navigation}></Footer>
     </View>
    )
}
export default Calendar