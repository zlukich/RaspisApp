import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';



export const Schedule = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <Header value="Archive" />
        </ScrollView>
    );
}

export default Schedule;