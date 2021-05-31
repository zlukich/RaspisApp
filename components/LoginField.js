import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Logo from '../assets/logo.svg'

const styles = StyleSheet.create({
    text: {
        letterSpacing: '3px',
        paddingTop: '20px',
        paddingLeft: '25px',
        paddingRight: '20px',
        paddingBottom: '20px',
        fontSize: 18,
        fontWeight: '400',
        color: '#A0A3BD',
    },
    container: {
        paddingTop: 'calc(30vh - 8vw)',
        flexDirection: 'column',
        alignItems: 'center',
    },
    border: {
        width: 'min(max(15vw + 100px, 150vh - 70vw), 90vw)',
        background: '#FCFCFC',
        border: '2px solid #0872B9',
        borderRadius: '10px',
        height: '70px'
    },
    image: {
        width: 'min(max(30vw, 150vh - 60vw), 90vw)',
        aspectRatio: '1350 / 342'
    },
    gap1: {
        height: '10vh'
    },
    gap2: {
        height: '4vh'
    },
    button: {
        backgroundColor: '#3159B4',
        borderRadius: '10px',
        width: 'min(max(7vw + 50px, 80vh - 50vw), 50vw)',
        height: '60px'
    },
    textbutton: {
        letterSpacing: '2.5px',
        paddingTop: '18px',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#F7F7FC',
    },
})

const LoginField = ({ value }) => {

    let TStyle = {
        width: 'min(max(15vw + 100px, 150vh - 70vw), 90vw)',
    };
    let BStyle = {
        backgroundColor: '#3159B4',
        borderRadius: '10px',
        width: 'min(max(7vw + 50px, 80vh - 50vw), 50vw)',
        height: '60px',
        textAlign: 'center',
        fontWeight: '400',
        color: '#F7F7FC',
    }
    return (
        <View style={styles.container}>
            <Image style = {styles.image} source = {Logo}/>
            <View style = {styles.gap1}/>
            <TextField style = {TStyle} label="Номер телефону" variant="outlined"> Номер телефону </TextField>
            <View style = {styles.gap2}/>
            <Button style = {BStyle}> Авторизация</Button>
        </View>
    );
}

export default LoginField;