import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

const Footer = ({value}) => {
    return (
        <View>
            <Text style={styles.text}>
            {value}
            </Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        
        height: 80,
        backgroundColor: '#195EC6',
        alignItems:'baseline',
        padding:15

    },
    text:{
        fontSize:30,
        color: '#ffffff',
        textAlign:'center',
        
    }

})
export default Footer
