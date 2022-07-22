import React, { useState } from 'react';
import Article from './Screens/Article';
import Settings from './Screens/Settings';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TextSizes } from './TextContext';


const Tab = createMaterialBottomTabNavigator();


export default function App() {
  const [titleSize,setTitleSize] = useState(40);
  const [authortextSize,setAuthortextSize] = useState(18);
  const [articletextSize,setArticletextSize] = useState(16);
  const [theme,setTheme] = useState('Light')
  const [articleColor,setArticlecolor] = useState(theme=='Light'?'#000000':'#FFFFFF')
  const [pagecolor,setPagecolor] = useState(theme==='Light'?'#FFFFFF':'#000000')
  values = {titleSize,setTitleSize,authortextSize,setAuthortextSize,articleColor,setArticlecolor,theme,setTheme,pagecolor,setPagecolor,articletextSize,setArticletextSize}
  return (
  <TextSizes.Provider value={values}>
    <NavigationContainer>
    <Tab.Navigator barStyle={{backgroundColor:'white'}}>
    <Tab.Screen name="Article" component={Article} />
    <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    </NavigationContainer>
  </TextSizes.Provider>
  );
  }


