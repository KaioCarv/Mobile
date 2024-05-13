import { StyleSheet, Platform } from "react-native"; 


export const styles = StyleSheet.create({
  ButtonWrapper:{
    overflow:"hidden",
    borderRadius:10,
  
  },
  button: {
    backgroundColor: '#222',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
     
  },
buttonActive: {
  opacity:Platform.OS === "ios" ? 0.7 : 1,
},

disebledButtom: {
  backgroundColor: '#ccc'
},
  buttonLabel:{
   color: '#fff',
   fontWeight: 'bold'
  },
  buttonLabelDisabled:{
  color: '#888'
  },
})