import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#ffffff',
        padding: 10
    },
    text: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
    }

})

const DateComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Icon name='left' color='#0872B9' size={18} />
                {props.dayName}{/* - {props.dayDate}*/}
                <Icon name='right' color='#0872B9' size={18} />
            </Text>
        </View>
    )
}
export default DateComponent;