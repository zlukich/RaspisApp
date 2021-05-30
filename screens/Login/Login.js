import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 12,
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 15,
        alignItems: 'center',
        justifyContent:'center'
    },
    mainInfoContainer: {
        flex: 12,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        margin:15,
        alignItems: 'center',
        justifyContent:'center'
    },
    item:{
        flex: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        padding: 15,
        margin:15,
    }
})

export const Login = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <Text style={styles.item}>Login</Text>
            <TextInput placeholder={'email'} style={styles.item}/>
            <TextInput placeholder={'password'} style={styles.item}/>
            <Button title={'Login'}style={styles.item} />
            </View>
        </ScrollView>
    );
}

export default Login;