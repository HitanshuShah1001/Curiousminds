import React,{useState} from "react";
import { SafeAreaView, View, Text, Switch } from "react-native";
import SettingsLabel from "../Components/Settings";
import DropdownComponent from "../Components/Dropdown";
import { TextSizes } from "../TextContext.js";
import Slider from '@react-native-community/slider';


export default function Selectarticlesize() {
  const {
    articletextSize,
    setArticletextSize,
  } = React.useContext(TextSizes);

  return(
    <View style={{paddingHorizontal:15,marginTop:20}}><Text style={{fontSize:articletextSize,fontWeight:'700' }}>Article Size</Text><Slider style={{ width: 200, height: 40 }}
          minimumValue={12}
          maximumValue={40}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000" onValueChange={(value) => setArticletextSize(value)}/></View>
  )
}