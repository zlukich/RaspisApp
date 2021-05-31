import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, ScrollView, Switch, Button, FlatList, ActivityIndicator, TextInput, View} from 'react-native';
import LoginField from '../../components/LoginField';

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
        flex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        padding: 15,
        margin:15,
    },
    xuitem:{
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
            <LoginField/>
    );
}

export default Login;