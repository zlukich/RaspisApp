import React from 'react'
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
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
    input: {
        paddingLeft: '25px',
        fontSize: 18,
        fontWeight: '400',
        color: '#A0A3BD',
        backgroundColor: 'transparent',
        border: '0px solid',
        position: 'absolute',
        height: '100%',
        width: '100%',
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
    }
})

const LoginField = ({ value }) => {

    return (
        <View style={styles.container}>
            <Image style = {styles.image} source = {Logo}/>
            <View style = {styles.gap1}/>
            <View style={styles.border}>
                <TextInput style={styles.input} />
                <Text style={styles.text}>
                    Номер телефону
                    </Text>
            </View>
            <View style = {styles.gap2}/>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.textbutton}>Авторизація</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginField;