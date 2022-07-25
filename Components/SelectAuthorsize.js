import React,{useState} from "react";
import { SafeAreaView, View, Text, Switch } from "react-native";
import SettingsLabel from "../Components/Settings";
import DropdownComponent from "../Components/Dropdown";
import { TextSizes } from "../TextContext.js";
import Slider from '@react-native-community/slider';


export default function Selectauthorsize() {
  const {
    authortextSize,
    setAuthortextSize,
  } = React.useContext(TextSizes);

  return(
    <View style={{paddingHorizontal:15,marginTop:20}}><Text style={{fontSize:authortextSize,fontWeight:'600' }}>Author Size</Text><Slider style={{ width: 200, height: 40 }}
          minimumValue={14}
          maximumValue={24}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000" onValueChange={(value) => setAuthortextSize(value)}/></View>
  )
}