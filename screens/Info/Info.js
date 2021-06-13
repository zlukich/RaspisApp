import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import NewsSwiper from '../../components/NewsSwiper';


const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#fff'
    }
})

export const Info = (props) => {
    return (
        <ScrollView style={styles.bg} stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <Header value="Новости" />
            <NewsSwiper infoTypes={props.infoTypes} />
        </ScrollView>
    );
}

export default Info;