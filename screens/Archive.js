import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator, View } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/AntDesign'


const styles = StyleSheet.create({
    mainInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        alignItems: 'stretch'
    },
    firstView: {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    expander: {
        flex: 3,
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
        paddingRight: '5%'
    },
    newMaterial: {
        flex: 3,
        color: '#000000',
        fontSize: 16,
        paddingLeft: 40,
        paddingTop: 5
    },
    Time: {
        flex: 1,
        color: 'gray',
        fontSize: 14,
        paddingLeft: 40,
        paddingTop: 5
    },
    container: {
        height: 50,
        backgroundColor: '#ffffff',
        padding: 10
    },
    text: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
    },
    arrow:
    {
        paddingTop: 20
    },
    materialicon:
    {
        paddingTop: 10
    },
    bg: {
        backgroundColor: '#fff'
    }
})



export const Schedule = () => {
    return (
        <ScrollView style={styles.bg} stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <Header value="Материал" />
            <View style={styles.container}>
                <Text style={styles.text}>
                    <Icon name='left' color='#0872B9' size={18} />
                    Название материала
                    <Icon name='right' color='#0872B9' size={18} />
                </Text>
            </View>
            <View style={styles.mainInfoContainer}>
                <Text style={styles.materialicon}><Icon name='filetext1' color='#0872B9' size={40} /></Text>
                <View style={styles.firstView}>
                    <Text style={styles.newMaterial}>{"Новый материал: Текст"}</Text>
                    <Text style={styles.Time}>12-12-2001</Text>
                </View>
                <View style={styles.expander}>
                    <Text style={styles.arrow}><Icon name='caretright' color='#0872B9' size={15} /></Text>
                </View>
            </View>
            <View style={styles.mainInfoContainer}>
                <Text style={styles.materialicon}><Icon name='edit' color='#0872B9' size={40} /></Text>
                <View style={styles.firstView}>
                    <Text style={styles.newMaterial}>{"Новое задание: Текст"}</Text>
                    <Text style={styles.Time}>12-12-2001</Text>
                </View>
                <View style={styles.expander}>
                    <Text style={styles.arrow}><Icon name='caretright' color='#0872B9' size={15} /></Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Schedule;