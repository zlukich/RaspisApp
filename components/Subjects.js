import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

const Subjects = ({subjects}) => {
    return (
        <View style={styles.container}>
            {
            subjects.map((subject,index)=>(<Subject key={subject.id} subject = {subject}/>))
          }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        
        height: 120,
        backgroundColor: '#12B7D8',
        padding: 15

    },
    text:{
        fontSize:30,
        color: '#ffffff',
        textAlign:'center',
        padding: 50
    }

})
export default Subjects