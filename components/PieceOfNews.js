import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    newsView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingRight: '10%'
    },
    buttonView: {
        flex: 2,
        fontSize: 12,
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingTop: 15,
    }
})


const PieceOfNews = (props) => {
    
    return (
        <View style={styles.container}>
                <Text style = {styles.newsView}>{props.header}</Text>
                <Button style = {styles.buttonView} type="clear" 
                    icon={
                        <Icon 
                            name="caret-right" 
                            size={25}
                            color="#111"/>
                        }
                ></Button>
        </View>
    )
}


export default PieceOfNews