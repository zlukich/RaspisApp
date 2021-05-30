import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import NewsSwiper from '../../components/NewsSwiper';


export const Info = (props) => {
    return (
        <ScrollView stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <Header value="Information" />

            <NewsSwiper infoType={props.infoType} />
        </ScrollView>
    );
}

export default Info;