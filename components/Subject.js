import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ExtendedInfo from './ExtendedInfo'
import ExpandButton from './ExpandButton'

const Subject = ({ value }) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.mainInfoContainer}>
                <View style={styles.firstView}>
                    <Text style={styles.subjType}>Type</Text>
                    <Text style={styles.subjTeacher}>Teacher</Text>
                    <Text style={styles.subjName}>{value}</Text>
                </View>
                <View style={styles.secondView}>
                    <Text style={styles.subjTime}>Time</Text>
                    <Text style={styles.subjRoom}>Room number</Text>
                </View>
            </View>
            <View style={{ flex: 2 }}>
                <ExtendedInfo isExpanded={expanded} />
            </View>
            <View style={styles.expander}>
                <ExpandButton changeStateFunction={() => setExpanded(!expanded)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    mainInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        alignItems: 'stretch'
    },
    firstView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    secondView: {
        flex: 2,
        fontSize: 12,
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingTop: 15,
    },
    expander: {
        flex: 3,
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
        paddingRight: '5%'
    },
    subjName: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        textAlign: 'left',
    },
    subjType: {
        flex: 2,
        color: 'gray',
        fontSize: 14,
    },
    subjTeacher: {
        flex: 3,
        color: '#000000',
        fontSize: 16
    },
    subjTime: {
        flex: 1,
        color: 'gray',
        fontSize: 14
    },
    subjRoom: {
        flex: 2,
        color: 'gray',
        fontSize: 14
    }
})

export default Subject