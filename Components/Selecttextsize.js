import React from "react";
import { View, Text } from "react-native";
import { TextSizes } from "../TextContext.js";
import Slider from '@react-native-community/slider';


export default function Selecttextsize() {
  const {
    titleSize,
    setTitleSize,
    articleColor
  } = React.useContext(TextSizes);

  return(
    <View style={{paddingHorizontal:15,marginTop:20}}><Text style={{fontSize:titleSize,fontWeight:'700',color:articleColor }}>Title Size</Text><Slider style={{ width: 200, height: 40 }}
          minimumValue={20}
          maximumValue={40}
          value={titleSize}
          minimumTrackTintColor={articleColor}
          maximumTrackTintColor={articleColor} onValueChange={(value) => setTitleSize(value)}/></View>
  )
}