import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const DateComponent = () => {
    var date = new Date();
    var m = date.getMonth(); m++;
    m < 10 ? m = '0' + m : m;
    let array = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четвер', 'Пятница', 'Суббота']
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <Icon name='left' color='#0872B9' size={18} />
                {array[date.getDay()] + ', ' + date.getDate() + '-' + m + '-' + date.getFullYear()}
                <Icon name='right' color='#0872B9' size={18} />
            </Text>
        </View>
    )
}
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
export default DateComponent;