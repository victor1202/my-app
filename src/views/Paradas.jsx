import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, View, TextInput } from 'react-native'
import useProducts from '../hooks/Products'
import Styles from '../styles/Styles'
const Products = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const { getAll } = useProducts()
  const { navigate } = useNavigation()

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setLoading(true)
    getAll()
      .then(data => setProducts(data))
      .finally(() => setLoading(false))
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={Styles.input}
        placeholder='informe o nome da parada'
      />
      <TextInput
        style={Styles.input}
        placeholder='informe a latitude'
      />
      <TextInput
        style={Styles.input}
        placeholder='informe a longitude'
      />
      <Button
        title='Adicionar Parada'
        onPress={() => navigate('Product')}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => <Item nome={item.nome} valor={item.valor} />}
        keyExtractor={item => item.id}
        refreshing={loading}
        onRefresh={getData}
      />
    </View>
  )
}

const Item = ({ nome, valor }) => {
  return (
    <View style={{ padding: 8 }}>
      <Text>{nome} - {valor}</Text>
    </View>
  )
}

export default Products