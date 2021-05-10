import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ExtendedInfo from './ExtendedInfo'
import ExpandButton from './ExpandButton'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    mainInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
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


const Subject = (props) => {
    const [expanded, setExpanded] = useState(false)
    let {subjectName, subjectType, subjectTheme, startTime, endTime, lecturerName} = props.subject;
    return (
        <View style={styles.container}>
            <View style={styles.mainInfoContainer}>
                <View style={styles.firstView}>
                    <Text style={styles.subjType}>{subjectType}</Text>
                    <Text style={styles.subjTeacher}>{lecturerName}</Text>
                    <Text style={styles.subjName}>{subjectName}</Text>
                </View>
                <View style={styles.secondView}>
                    <Text style={styles.subjTime}>{startTime}</Text>
                    <Text style={styles.subjRoom}>{endTime}</Text>
                </View>
            </View>
            <View style={{ flex: 2 }}>
                <ExtendedInfo isExpanded={expanded} subjectTheme={subjectTheme}/>
            </View>
            <View style={styles.expander}>
                <ExpandButton changeStateFunction={() => setExpanded(!expanded)} />
            </View>
        </View>
    )
}


export default Subject