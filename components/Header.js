import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0872B9',
        alignItems: 'center',
        padding: '3%'
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
    }
})

const Header = ({ value }) => {
    if (value == 'Розклад занять') {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#0872B9" />
                <Text style={styles.text}>
                    {value}{' (' + (new Date()).getFullYear() + ')'}
                </Text>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#0872B9" />
                <Text style={styles.text}>
                    {value}
                </Text>
            </View>
        );
    }
}

export default Header;