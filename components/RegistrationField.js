import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
        paddingTop: 'calc(20vh - 4vw)',
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
    gap2: {
        height: '2vh'
    },
    button: {
        backgroundColor: '#3159B4',
        borderRadius: '10px',
        width: 'min(max(7vw + 50px, 80vh - 50vw), 50vw)',
        height: '60px'
    },
    textheader: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
})

const RegistrationField = ({ value }) => {

    let TStyle = {
        width: 'min(max(15vw + 100px, 150vh - 70vw), 90vw)',
        paddingBottom: '2vh'
    };
    let BStyle = {
        backgroundColor: '#3159B4',
        borderRadius: '10px',
        width: 'min(max(8vw + 80px, 80vh - 50vw), 50vw)',
        height: '60px',
        textAlign: 'center',
        fontWeight: '400',
        color: '#F7F7FC',
    }
    return (
        <View style={styles.container}>
            <View style = {styles.gap1}/>
            <Text style = {styles.textheader}>Регистрация</Text>
            <View style = {styles.gap2}/>
            <TextField style = {TStyle} label="Имя" variant="outlined"> Номер телефону </TextField>
            <TextField style = {TStyle} label="Фамилия" variant="outlined"> Номер телефону </TextField>
            <TextField style = {TStyle} label="Отчество" variant="outlined"> Номер телефону </TextField>
            <TextField style = {TStyle} label="Email" variant="outlined"> Номер телефону </TextField>
            <TextField style = {TStyle} label="Телефон" variant="outlined"> Номер телефону </TextField>
            <TextField style = {TStyle} label="Пароль" variant="outlined"> Номер телефону </TextField>
            <View style = {styles.gap2}/>
            <Button style = {BStyle}> Подтвердить</Button>
        </View>
    );
}

export default RegistrationField;