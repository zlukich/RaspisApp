import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import DateComponent from './DateComponent';
import Subject from './Subject';

const NewsSwiper = (props) => {
    return (
        <Swiper  showsButtons={false} loop={false} showsPagination={false}>
            
                <Text>{props.infoType} фффффффф</Text>
        </Swiper>
        
    );
};

export default NewsSwiper;