import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import Styles from "../styles/Styles"

function Button({ label, onPress}){
    return(
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            <Text style={Styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}
export default Button
export { Button }
