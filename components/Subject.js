import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import {Divider} from 'react-native-elements'

const Subject = ({value}) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstView}>
                <Text>Type</Text>
                <Text style={styles.subjName}>{value}</Text>
                <Text>Teacher</Text>
            </View>
            <View style={styles.secondView}>
                 <Text>Time</Text>
                  <Text>Room number</Text>
            </View>
            <Divider/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
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
        flexDirection:'column',
        alignItems:'flex-end',
        paddingTop:15,
        

    },
    subjName:{
        flex:1,
        fontSize:30,
        color: '#000000',
        textAlign:'left',
        //padding: 50
    },
    subjType:{
        flex:2,
        fontSize:15,
    },
    subjTeacher:{
        flex:3,
    },
    subjTime:{
        flex:1,
        padding:15,
        
    },
    subjRoom:{
        flex:2,
        padding:15,
    }


})
export default Subject