import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

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
        paddingTop: 'calc(20vh - 4vw)',
        flexDirection: 'column',
        alignItems: 'center',
    },
    border: {
        // width: 'min(max(15vw + 100px, 150vh - 70vw), 90vw)',
        backgroundColor: '#FCFCFC',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#0872B9',
        borderRadius: 10,
        height: '70px'
    },
    image: {
        // width: 'min(max(30vw, 150vh - 60vw), 90vw)',
        aspectRatio: 1350 / 342
    },
    gap2: {
        // height: '2vh'
    },
    button: {
        backgroundColor: '#3159B4',
        borderRadius: 10,
        // width: 'min(max(7vw + 50px, 80vh - 50vw), 50vw)',
        height: '60px'
    },
    textheader: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
})

const RegistrationField = (props) => {

    let TStyle = {
        width: 'min(max(15vw + 100px, 150vh - 70vw), 90vw)',
        paddingBottom: '2vh'
    };
    let BStyle = {
        backgroundColor: '#3159B4',
        borderRadius: 10,
        width: 'min(max(8vw + 80px, 80vh - 50vw), 50vw)',
        height: '60px',
        textAlign: 'center',
        fontWeight: '400',
        color: '#F7F7FC',
    }
    let [registrationPayload, setRegistrationPayload] = useState({});
    let sumbitFuction = () => {
        props.registration(registrationPayload)
    }
    return (
        <View style={styles.container}>
            <View style={styles.gap1} />
            <Text style={styles.textheader}>Регистрация</Text>
            <View style={styles.gap2} />
            <TextField style={TStyle} label="Имя" variant="outlined" onChange={() => setRegistrationPayload({ ...registrationPayload, firstName: event.target.value })}> Имя </TextField>
            <TextField style={TStyle} label="Фамилия" variant="outlined" onChange={() => setRegistrationPayload({ ...registrationPayload, lastName: event.target.value })}> Фамилия </TextField>
            <TextField style={TStyle} label="Отчество" variant="outlined" onChange={() => setRegistrationPayload({ ...registrationPayload, secondName: event.target.value })}> Отчество </TextField>
            <TextField style={TStyle} label="Email" variant="outlined" onChange={() => setRegistrationPayload({ ...registrationPayload, email: event.target.value })}> email </TextField>
            <TextField style={TStyle} label="Телефон" variant="outlined" onChange={() => setRegistrationPayload({ ...registrationPayload, phone: event.target.value })}> Номер телефону </TextField>
            <TextField style={TStyle} label="Пароль" variant="outlined" onChange={() => setRegistrationPayload({ ...registrationPayload, password: event.target.value })}> Пароль </TextField>
            <View style={styles.gap2} />
            <Button style={BStyle} onClick={() => sumbitFuction()}>Подтвердить</Button>
        </View>
    );
}

export default RegistrationField;