import React from "react";
import {View,Text} from 'react-native';

export default function SettingsLabel(){
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontSize:40,paddingHorizontal:15,fontWeight:'700'}}>Settings</Text>
        </View>
    )
}