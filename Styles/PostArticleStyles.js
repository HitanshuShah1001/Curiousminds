import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  shareyourthoughts: {
    fontSize:40,
    fontWeight:'700'
    ,marginBottom:20,
  marginTop:10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 10,
  },
  input: {
    height: 50,
    backgroundColor: "#efefef",
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
  },
  author: {
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 10,
    marginTop: 20,
  },
  articlecontainer: {
    paddingHorizontal: 15,
    flex: 2.3,
  },
  article: {
    height: "80%",
    backgroundColor: "#efefef",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    minHeight: 400,
  },
  buttontextstyle: {
  color:'white',
  alignSelf:'center',
  justifyContent:'center',
  fontWeight:'700'
  },
  buttonContainer: {
    height:40,
    width:190,
    backgroundColor:'#FF7F50',
    borderRadius:20,
    justifyContent:'center'
  },
  pressablestyle: {
    alignSelf:'center',
    marginTop:10,
    alignItems:'center'
  }
});



export default styles;