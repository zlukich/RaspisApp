import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator, StatusBar } from 'react-native';
import Header from '../../components/Header';
import SwiperComponent from '../../components/SwiperComponent';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});

export const Schedule = (props) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false} style={styles.container}>
            <Header value="Расписание" />
            <SwiperComponent days={props.days} />
        </ScrollView>
    );
}

export default Schedule;