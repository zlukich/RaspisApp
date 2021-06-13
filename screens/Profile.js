import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';


const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#fff'
    }
})

export const Schedule = () => {
    return (
        <ScrollView style={styles.bg} stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <Header value="Профиль" />
        </ScrollView>
    );
}

export default Schedule;