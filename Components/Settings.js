import React from "react";
import {View,Text} from 'react-native';
import { TextSizes } from "../TextContext.js";

export default function SettingsLabel(){
    const {
        articleColor,
      } = React.useContext(TextSizes);
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontSize:40,paddingHorizontal:15,fontWeight:'700',color:articleColor}}>Settings</Text>
        </View>
    )
}