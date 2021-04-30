import React, { useState }  from 'react'
import {StyleSheet, View,Text } from 'react-native'
import { Button } from 'react-native-elements';
import expandedImage from './Images/ButtonExpanded.png'
import nonExpandedImage from './Images/ButtonNonExpanded.png'
import Icon from 'react-native-vector-icons/FontAwesome'
//import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

const styles = StyleSheet.create({
    transparentButton:{
    	backgroundColor: '#ffffff'
    }
})

const ExpandButton = ({src, changeStateFunction}) => {
    const [expanded, setExpanded] = useState(false)

    return (
    		<View>
    			<Button type="clear" icon={<Icon
							      name={expanded?"arrow-up":"arrow-down"}
							      size={10}
							      color="grey"
   							 />
  							}
		   				onPress={()=>
		    				CallTwoFunctions(
		    					changeStateFunction, 
		    					()=>{setExpanded(!expanded)}
		    					)
		    			}>
    			</Button>
    		</View>
    	)
}

function CallTwoFunctions(func1, func2){
	func1()
	func2()
}

export default ExpandButton