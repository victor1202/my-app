import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Dimensions, StyleSheet, View } from 'react-native'
import Button from '../components/button'
import MapView, { Marker } from 'react-native-maps'
import { useCEP } from '../hooks/cep'

const region = {
  latitude: -3.7621079,
  latitudeDelta: 0.0922,
  longitude: -38.4928662,
  longitudeDelta: 0.0421
}
const { width, height } = Dimensions.get('window')
const Stylees = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#cddced',
    flexDirection: 'row',
    borderRadius: 12
    
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#002233',
    borderRadius: 4,
    padding: 8,
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    justifyContent:'space-around',
    marginBottom: 100
  },
  mapview: {
    width: width,
    height: height,
  },
  consoleHome: {
    backgroundColor: '#134bcb',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -65,
  },
})

const Home = () => {
  const [address, setAddress] = useState()
  const { getAddress } = useCEP()
  const { navigate } = useNavigation()
  const handleText = async (text) => {
    if (text.length === 8) {
      const temp = await getAddress(text)
      setAddress(temp)
    } else {
      setAddress()
    }
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center',backgroundColor: '#134bcb', padding: 8 }}>
      <View style={Stylees.mapContainer}>
        <MapView
          style={Stylees.mapview}
          region={address ? {
            latitude: address.lat,
            latitudeDelta: 0.0922,
            longitude: address.lng,
            longitudeDelta: 0.0421
          } : region}
          initialRegion={region}
        >
          {address && (
            <Marker
              title={`CEP - ${address.cep}`}
              description={`${address.address}, ${address.district} - ${address.city}/${address.state}`}
              coordinate={{ "latitude": address.lat, "longitude": address.lng }}
              onCalloutPress={() => navigate('Details')}
            />
          )}
        </MapView>
        <View style={Stylees.consoleHome}>
        <Button
        label='Papicu'
        onPress={() => navigate('Maps')}
        />
        <Button
        label ='Messejana'
        onPress={() => navigate('Messejana')}
        />
        <Button
        label ='Adicionar parada'
        onPress={() => navigate('Paradas')}
        />
      </View>
    </View>  
  </View> 
  )
}

export default Home