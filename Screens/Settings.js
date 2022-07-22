import React,{useState} from "react";
import { SafeAreaView, View, Text, Switch } from "react-native";
import SettingsLabel from "../Components/Settings";
import DropdownComponent from "../Components/Dropdown";
import { TextSizes } from "../TextContext.js";

export default function Settings() {
  const {
    titleSize,
    setTitleSize,
    authortextSize,
    setAuthortextSize,
    articleColor,
    setArticlecolor,
    theme,
    setTheme,
    pagecolor,
    setPagecolor,
    articletextSize,
    setArticletextSize,
  } = React.useContext(TextSizes);
  const [on, setOn] = useState(false);

  const changeTheme = () => {
    if(theme==='Light'){
        setOn(true)
        setTheme('Dark');
        setPagecolor('#000000')
        setArticlecolor('#FFFFFF')
    }
    else{
        setOn(false);
        setTheme('Light');
        setPagecolor('#FFFFFF')
        setArticlecolor('#000000')
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: pagecolor }}>
      <SettingsLabel />
      <View style={{ flex: 10 }}>
        <DropdownComponent text="Title" />
        <DropdownComponent text="Author" />
        <DropdownComponent text="Article" />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 18,
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={changeTheme}
            value={on}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
