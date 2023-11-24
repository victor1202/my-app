import { StyleSheet } from 'react-native'

// #cddced azul claro
// #134bcb azul escuro
// #43b3a4 verde claro
// #0498b4 verde escuro
// #6885d6 lilas

const Styles = StyleSheet.create({
    containerLogin: {
      backgroundColor: '#134bcb',
      flex: 1,
      justifyContent: 'center',
      padding: 8,
    },
    containerHome: {
      backgroundColor: '#43b3a4',
      flex: 1,
      justifyContent: 'flex-end'
      
    },
    logo: {
      alignSelf: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#43b3a4',
      borderRadius: 4,
      backgroundColor: '#f3f3f3',
      padding: 6,
      marginVertical: 8,
      fontSize: 18,
    },
    button: {
      padding: 16,
      backgroundColor: '#6495ED',
      borderColor: '#6F11BD',
      borderWidth: 2,
      borderRadius: 16,
      margin: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      alignSelf: 'center',
    },
    social: {
      flexDirection: 'row',
      gap: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 16,
    },
    console: {
      flexDirection: 'row',
      gap: 16,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 16,
    },
    consoleHome: {
      backgroundColor: '#134bcb',
      flexDirection: 'row',
      gap: 16,
      justifyContent: 'space-around',
    },
  })
export default Styles