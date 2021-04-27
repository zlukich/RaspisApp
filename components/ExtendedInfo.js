import React, { useState }  from 'react'
import { StyleSheet, View,Text } from 'react-native'


const styles = StyleSheet.create({
	expandedInfo:{
        flex:2,
        fontSize:16,
        textAlign:'left',
        padding: 15
    },
    subjTheme:{
        flex:1,
        fontSize:12
        
    },
    subjHomeWork:{
        flex:2,
        fontSize:12
    }
})

const ExtendedInfo = () => {
    return (
        <View style={styles.expandedInfo}>
                <Text style = {styles.subjTheme}>Тема: ********</Text>
                <Text style = {styles.subjHomeWork}>Д/З:  ********</Text>
            </View>
        )
}

export default ExtendedInfo