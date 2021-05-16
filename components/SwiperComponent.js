import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import DateComponent from './DateComponent';
import Subject from './Subject';

const SwiperComponent = (props) => {
    return (
        <Swiper  showsButtons={false} loop={false} showsPagination={false}>
            {props.days.map((day,index)=><ScrollView  key={index}>
                <DateComponent dayName={day.dayName} dayDate={day.dayDate}/>
                {day.subjectsList.map((subject,index)=><>
                    <Subject subject={subject} key={index}/>
                    <Divider />
                </>)}
            </ScrollView>)}
        </Swiper>
    );
};

export default SwiperComponent;