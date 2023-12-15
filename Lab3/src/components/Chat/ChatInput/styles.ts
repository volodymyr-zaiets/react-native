import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type ChatInputStyle = {
  root: ViewStyle
  textInput: TextStyle
}

export default (): ChatInputStyle => {
  return StyleSheet.create({
    root: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
      backgroundColor: '#D3D3D3',
      borderRadius: 20,
    },
    textInput: {
      width: '100%',
      fontSize: 20,
    }
  })
}
