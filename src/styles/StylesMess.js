import { StyleSheet } from "react-native"
import Messejana from "../views/Messejana"

const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      margin: 8,
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
    },
    mapview: {
      width: width,
      height: height,
    }
  })
  
  export default StylesMess