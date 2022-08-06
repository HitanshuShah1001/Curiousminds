import React,{useState} from "react";
import { SafeAreaView, View, Text, Switch,Pressable,Linking } from "react-native";
import SettingsLabel from "../Components/Settings";
import { TextSizes } from "../TextContext.js";
import Selecttextsize from "../Components/Selecttextsize";
import Selectauthorsize from "../Components/SelectAuthorsize";
import Selectarticlesize from "../Components/SelectArticlesize";
import styles from "../Styles/Settingsstyle";
import { openComposer } from "react-native-email-link";
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
          style={styles.switchcontainer}
        >
          <Text style={{ fontSize: 18, fontWeight: "600",color:articleColor }}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            onValueChange={changeTheme}
            value={on}
          />
        </View>
        <View style={{marginTop:20,paddingHorizontal:18}}>
          <Pressable onPress={() =>  openComposer({to:'hitanshushah5@gmail.com'})}>
          <Text style={{fontSize: 16, fontWeight: "600",color:articleColor,textDecorationLine:'underline'}}>Contact Us</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
