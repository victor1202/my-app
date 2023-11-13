import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Image, Text, TextInput, View } from 'react-native'
import logo from '../assets/estacio.jpg'
import Styles from '../styles/Styles'
const Login = () => {
  const { navigate } = useNavigation()

  return (
    <View style={Styles.containerLogin}>
      <StatusBar style='auto' />
      <Image source={logo} style={Styles.logo} />
      <TextInput
        style={Styles.input}
        placeholder='informe seu email'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={Styles.input}
        placeholder='informe sua senha'
        keyboardType='default'
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <Button
        title='Entrar'
        onPress={() => navigate('Home')}
      />
      <View style={Styles.social}>
        <FontAwesome5 name='google' size={32} color='#f3f3f3' />
        <FontAwesome5 name='facebook' size={32} color='#f3f3f3' />
      </View>
      <View style={Styles.console}>
        <Text style={{ color: '#f3f3f3' }}>Registre-se</Text>
        <Text style={{ color: '#f3f3f3' }}>Esqueci minha senha</Text>
      </View>

    </View>
  )
}

export default Login