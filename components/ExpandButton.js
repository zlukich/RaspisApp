import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'


const ExpandButton = ({ src, changeStateFunction }) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <View>
            <Button type="clear" icon={<Icon
                name={expanded ? "caret-up" : "caret-down"}
                size={25}
                color="#111"
            />
            }
                onPress={() =>
                    CallTwoFunctions(
                        changeStateFunction,
                        () => { setExpanded(!expanded) }
                    )
                }>
            </Button>
        </View>
    );
}

function CallTwoFunctions(func1, func2) {
    func1()
    func2()
}

export default ExpandButton