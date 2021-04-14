import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const ChangeDay = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            <Icon name='left' color='blue' size={30} style={{paddingRight:15}}/>      
            День тижня      
            <Icon name='right' color='blue' size={30} style={{paddingLeft:15}}/>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        
        height: 50,
        backgroundColor: '#ffffff',
        padding:10

    },
    text:{
        fontSize:30,
        color: '#000000',
        textAlign:'center',
        
    }

})
export default ChangeDay