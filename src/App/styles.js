import { StyleSheet, Platform, StatusBar } from "react-native";

 export const styles = StyleSheet.create({
  wrapper: {
   marginTop:(
    Platform.OS === 'android' ? StatusBar.currentHeight : 0
   ),
   flex:1
  },
  container: {
  paddingHorizontal:20,
  flex:1,
 },
modalOverlay: {
  backgroundColor: 'rgba(0,0,0, 0.5)',
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
},
modalContainer: {
  backgroundColor: "white",
  padding: 16,
  borderRadius: 8,
},


//  PostContainer:{
//   backgroundColor:"#333",
//   borderRadius: 8,
//   height: 64,
//   justifyContent: "center",
//   alignItems: "center",
  
//  },
//  postTitle:{
//   color: "#fff",
//   fontSize: 18,
//   fontWeight: "bold"
//  },
});
