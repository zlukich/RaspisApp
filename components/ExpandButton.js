import React, { useState }  from 'react'
import {StyleSheet, View,Text } from 'react-native'
import {Button} from 'react-native'
import expandedImage from './Images/ButtonExpanded.png'
import nonExpandedImage from './Images/ButtonNonExpanded.png'


const styles = StyleSheet.create({
    transparentButton:{
    	backgroundColor: '#ffffff'
    }
})

const ExpandButton = ({src, changeStateFunction}) => {
    const [expanded, setExpanded] = useState(false)
    return (
    		<View>
    			<button styles={styles.transparentButton} onClick={()=>
    				CallTwoFunctions(
    					changeStateFunction, 
    					()=>{setExpanded(!expanded)}
    					)
    			}>
    				<img src = {expanded? expandedImage: nonExpandedImage}/>
    			</button>
    		</View>
    	)
}

function CallTwoFunctions(func1, func2){
	func1()
	func2()
}

export default ExpandButton