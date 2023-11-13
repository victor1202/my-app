import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Styles from '../styles/Styles'
import Button from '../components/button'
const Home = () => {
  const { navigate } = useNavigation()
  return (
    <View style={Styles.containerHome}>
    <View style={Styles.consoleHome}>
        <Button
        style={Styles.button}
        label='maps'
        onPress={() => navigate('Maps')}
        />
        <Button
        label ='Messejana'
        onPress={() => navigate('Messejana')}
        />
        <Button
        label ='Paradas'
        onPress={() => navigate('Paradas')}
        />
    </View>
    </View> 
  )
}

export default Home