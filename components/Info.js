import React from 'react'
import {View} from 'react-native'
import {Button,Text} from 'react-native'
import Footer from './Footer'
export const Info = ({navigation}) => {
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Лээ ты кудэ, не видишь узбек идет</Text>
      <Footer value='Some value' navigation={navigation}></Footer>
     </View>
    )
}

export default Info