import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// cria a navegacao em pilha
const Stack = createNativeStackNavigator()

// importa as views
import Home from './src/views/Home'
import Login from './src/views/Login'
import Paradas from './src/views/Paradas'
import Maps from './src/views/Maps'
import Details from './src/views/Details'
import Messejana from './src/views/Messejana'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Paradas' component={Paradas} />
        <Stack.Screen name='Maps' component={Maps} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Messejana' component={Messejana} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}