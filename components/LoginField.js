import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
// import TextField from '@material-ui/core/TextField'
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Logo from '../assets/logo.svg'
import { useState } from 'react'
var { vw, vh, vmin, vmax } = require('react-native-viewport-units');

const styles = StyleSheet.create({
    text: {
        letterSpacing: 3,
        paddingTop: '20px',
        paddingLeft: '25px',
        paddingRight: '20px',
        paddingBottom: '20px',
        fontSize: 18,
        fontWeight: '400',
        color: '#A0A3BD',
    },
    container: {
        // paddingTop: `calc(30 * vh - 8 * vw)`,
        flexDirection: 'column',
        alignItems: 'center',
    },
    border: {
        // width: 'min(max(15vw + 100px, 150vh - 70vw), 90vw)',
        width: Math.min(Math.max(15 * vw + 100, 150 * vh - 70 * vw), 90 * vw),
        backgroundColor: '#FCFCFC',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#0872B9',
        borderRadius: 10,
        height: '70px'
    },
    image: {
        // width: 'min(max(30vw, 150vh - 60vw), 90vw)',
        width: Math.min(Math.max(30 * vw, 150 * vh - 60 * vw), 90 * vw),
        aspectRatio: 1350 / 342
    },
    gap1: {
        // height: '10vh'
        height: 10 * vh
    },
    gap2: {
        // height: '4vh'
        height: 4 * vh
    },
    button: {
        backgroundColor: '#3159B4',
        borderRadius: 10,
        // width: 'min(max(7vw + 50px, 80vh - 50vw), 50vw)',
        width: Math.min(Math.max(15 * vw + 50, 80 * vh - 50 * vw), 90 * vw),
        height: '60px'
    },
    textbutton: {
        letterSpacing: 2.5,
        paddingTop: '18px',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#F7F7FC',
    },
})

const LoginField = (props) => {

    let TStyle = {
        // width: 'min(max(15vw + 100px, 150vh - 70vw), 90vw)',
        width: Math.min(Math.max(15 * vw + 100, 150 * vh - 70 * vw), 90 * vw),
    };
    let BStyle = {
        backgroundColor: '#3159B4',
        borderRadius: 10,
        // width: 'min(max(7vw + 50px, 80vh - 50vw), 50vw)',
        width: Math.min(Math.max(15 * vw + 50, 80 * vh - 50 * vw), 90 * vw),
        height: '60px',
        textAlign: 'center',
        fontWeight: '400',
        color: '#F7F7FC',
    }
    let [loginPayload, setLoginPayload] = useState({});
    let sumbitFuction = () => {
        props.login(loginPayload)
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Logo} />
            <View style={styles.gap1} />
            {/* <TextField style={TStyle} label="Логин" variant="outlined" onChange={() => setLoginPayload({ ...loginPayload, email: SetValue() })} />
            <TextField style={TStyle} label="Пароль" variant="outlined" onChange={() => setLoginPayload({ ...loginPayload, password: SetValue() })} /> */}
            <Input style={TStyle} label="Логин" onChange={value => setLoginPayload({ ...loginPayload, email: value })} />
            <Input style={TStyle} label="Пароль" onChange={value => setLoginPayload({ ...loginPayload, password: value })} />
            <View style={styles.gap2} />
            <Button style={BStyle} onPress={() => sumbitFuction()} title="Авторизация" />
        </View>
    );
}

export default LoginField;