import React, { useState }  from 'react'
import { StyleSheet, View,Text } from 'react-native'
import {Divider} from 'react-native-elements'
import {Button} from 'react-native'
import ExtendedInfo from './ExtendedInfo'

const Subject = ({value}) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <View style={styles.container}>
           <View style={styles.mainInfoContainer}>
                <View style={styles.firstView}>
                    <Text style={styles.subjType}>Type</Text>
                    <Text style={styles.subjName}>{value}</Text>
                    <Text style={styles.subjTeacher}>Teacher</Text>
                </View>
                <View style={styles.secondView}>
                      <Text style={styles.subjTime}>Time</Text>
                      <Text style={styles.subjRoom}>Room number</Text>
                      <button Text = "Expand" onClick={() => setExpanded(!expanded)}/>
                </View>
            </View>
            {expanded 
                ? (<ExtendedInfo/>)
                : (<View/>)}
            <Divider/>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    mainInfoContainer:{
        flex:1,
        flexDirection:'row',
        height: 100,
        backgroundColor: 'white',
        padding: 15,
        alignItems:'stretch'
    },
    firstView:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start'
    },
    secondView:{
        flex:2,
        fontSize:12,
        flexDirection:'column',
        alignItems:'flex-end',
        paddingTop:15,
    },
    expander:{
    },
    subjName:{
        flex:1,
        fontSize:16,
        color: '#000000',
        textAlign:'left',
    },
    subjType:{
        flex:2,
        fontSize:12,
    },
    subjTeacher:{
        flex:3,
        fontSize:16
    },
    subjTime:{
        flex:1,
        fontSize:12
        
    },
    subjRoom:{
        flex:2,
        fontSize:12
    }
})

export default Subject