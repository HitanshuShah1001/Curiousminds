import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

 modal: {
    justifyContent:'center',
    alignItems:'center'
 },
 container: {
    justifyContent:'center',
    flex:1,
    alignItems:'center',
    paddingHorizontal:10
 },
 subcontainer: {
    height:200,
    width:290,
    backgroundColor:'#FF7F50',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
 },
 text: {
    color:'white',
    fontWeight:'700',
    fontSize:14
 }
});

export default styles;
