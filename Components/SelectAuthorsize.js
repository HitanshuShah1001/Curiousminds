import React from "react";
import { View, Text } from "react-native";
import { TextSizes } from "../TextContext.js";
import Slider from '@react-native-community/slider';


export default function Selectauthorsize() {
  const {
    authortextSize,
    setAuthortextSize,
    articleColor
  } = React.useContext(TextSizes);

  return(
    <View style={{paddingHorizontal:15,marginTop:20}}><Text style={{fontSize:authortextSize,fontWeight:'600',color:articleColor }}>Author Size</Text><Slider style={{ width: 200, height: 40 }}
          minimumValue={14}
          maximumValue={24}
          minimumTrackTintColor={articleColor}
          maximumTrackTintColor={articleColor} onValueChange={(value) => setAuthortextSize(value)}/></View>
  )
}