import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    newsView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingRight: '10%',
        color: '#111111',
        fontSize: 16,
        lineHeight: 20,
        width: 214,
        marginLeft: 15,
    },
    buttonView: {
        flex: 2,
        fontSize: 12,
        flexDirection: 'column',
        alignItems: 'center',
    }
})


const PieceOfNews = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.newsView}>{props.header}</Text>
            <Button style={styles.buttonView} type="clear"
                icon={
                    <Icon
                        name="caret-right"
                        size={20}
                        color="#5593BC" />
                }
            ></Button>
        </View>
    )
}


export default PieceOfNews