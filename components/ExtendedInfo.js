import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'


const styles = StyleSheet.create({
    expandedInfo: {
        flex: 2,
        fontSize: 16,
        backgroundColor: '#fff',
        textAlign: 'left',
        padding: '5%'
    },
    subjTheme: {
        flex: 1,
        fontSize: 16
    },
    subjHomeWork: {
        flex: 2,
        fontSize: 16
    }
})

const ExtendedInfo = ({ isExpanded }) => {
    if (isExpanded)
        return (
            <View style={styles.expandedInfo}>
                <Text style={styles.subjTheme}>Тема: ********</Text>
                <Text style={styles.subjHomeWork}>Д/З:  ********</Text>
            </View>
        )
    return <View />
}

export default ExtendedInfo