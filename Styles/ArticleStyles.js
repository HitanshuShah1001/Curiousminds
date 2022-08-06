import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  article: {
    paddingHorizontal: 15,
    alignSelf: "center",
    marginTop: 20,
    letterSpacing: 2,
  },
  title: {
    paddingHorizontal: 15,
    fontWeight: "700",
    alignSelf: "flex-start",
  },
  author: {
    paddingHorizontal: 10,
    fontWeight: "600",
    alignSelf: "flex-end",
    marginTop: 20,
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  listencontainer: {
    flexDirection: "row",
    flex: 0.1,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image:{
    height:25,
    width:25
  }
});


export default styles;