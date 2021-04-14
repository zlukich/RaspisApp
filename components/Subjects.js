import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

const Subjects = ({value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            {value}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        
        height: 120,
        backgroundColor: '#12B7D8',
        padding: 15

    },
    text:{
        fontSize:30,
        color: '#ffffff',
        textAlign:'center',
        padding: 50
    }

})
export default Subjects