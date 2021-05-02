import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements';
import Header from '../components/Header';
import Subject from '../components/Subject';
import DateComponent from '../components/DateComponent';
import SwiperComponent from '../components/SwiperComponent';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});

export const Schedule = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false} style={styles.container}>
            <Header value="Розклад занять" />
            {/* <DateComponent />
            <Subject value='Математика' />
            <Divider />
            <Subject value='Английский' />
            <Divider />
            <Subject value='Сиспрог' />
            <Divider />
            <Subject value='Сиспрог' />
            <Divider />
            <Subject value='Сиспрог' />
            <Divider /> */}
            <SwiperComponent />
        </ScrollView>
    );
}

export default Schedule;