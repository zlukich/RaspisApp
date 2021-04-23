import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

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

const Header = ({value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {value}{' ('+(new Date()).getFullYear() +')'}
            </Text>
        </View>
    )
}

export default Header
