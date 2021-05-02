import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import DateComponent from './DateComponent';
import Subject from './Subject';

const SwiperComponent = () => {
    return (
        <Swiper showsButtons={false} loop={false} showsPagination={false}>
            <ScrollView>
                <DateComponent />
                <Subject value='Математика' />
                <Divider />
                <Subject value='Английский' />
                <Divider />
                <Subject value='Сиспрог' />
                <Divider />
                <Subject value='Сиспрог' />
                <Divider />
                <Subject value='Сиспрог' />
                <Divider />
            </ScrollView>
            <ScrollView>
                <DateComponent />
                <Subject value='ТЗИ' />
                <Divider />
                <Subject value='ТЗИ' />
                <Divider />
            </ScrollView>
        </Swiper>
    );
}

export default SwiperComponent;