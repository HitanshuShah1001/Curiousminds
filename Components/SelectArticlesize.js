import React,{useState} from "react";
import { SafeAreaView, View, Text, Switch } from "react-native";
import { TextSizes } from "../TextContext.js";
import Slider from '@react-native-community/slider';


export default function Selectarticlesize() {
  const {
    articletextSize,
    setArticletextSize,
    articleColor
  } = React.useContext(TextSizes);

  return(
    <View style={{paddingHorizontal:15,marginTop:20}}><Text style={{fontSize:articletextSize,fontWeight:'700',color:articleColor }}>Article Size</Text><Slider style={{ width: 200, height: 40 }}
          minimumValue={12}
          maximumValue={40}
          value={articletextSize}
          minimumTrackTintColor={articleColor}
          maximumTrackTintColor={articleColor} onValueChange={(value) => setArticletextSize(value)}/></View>
  )
}