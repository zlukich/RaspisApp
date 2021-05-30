import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'


const styles = StyleSheet.create({
    expandedInfo: {
    	flexDirection: 'column',
        fontSize: 16,
        backgroundColor: '#fff',
        textAlign: 'left',
        padding: '1%'
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

const ExtendedInfo = ({ isExpanded, subjectTheme}) => {
    if (isExpanded)
        return (
            <View style={styles.expandedInfo}>
                <Text style={styles.subjTheme}>Тема: {subjectTheme}</Text>
                <Text style={styles.subjHomeWork}>Д/З:  ********</Text>
            </View>
        )
    return <View />
}

export default ExtendedInfo