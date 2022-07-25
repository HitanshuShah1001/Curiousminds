import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TextSizes } from "../TextContext.js";

export default function Divider(){
    const {
        articleColor
      } = React.useContext(TextSizes);
    return (
        <View style={{height:3,backgroundColor:articleColor,width:'60%',paddingHorizontal:10,marginTop:10}} />
    )
}