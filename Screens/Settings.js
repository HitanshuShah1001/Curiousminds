import React,{useState} from "react";
import { SafeAreaView, View, Text, Switch } from "react-native";
import SettingsLabel from "../Components/Settings";
import { TextSizes } from "../TextContext.js";
import Selecttextsize from "../Components/Selecttextsize";
import Selectauthorsize from "../Components/SelectAuthorsize";
import Selectarticlesize from "../Components/SelectArticlesize";
export default function Settings() {
  const {
    articleColor,
    setArticlecolor,
    theme,
    setTheme,
    pagecolor,
    setPagecolor,
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
        <Selecttextsize />
        <Selectauthorsize />
        <Selectarticlesize />
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 18,
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600",color:articleColor }}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            onValueChange={changeTheme}
            value={on}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
