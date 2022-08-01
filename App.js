import React, { useState } from 'react';
import Article from './Screens/Article';
import Settings from './Screens/Settings';
import PostArticle from './Screens/PostArticle';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TextSizes } from './TextContext';
import { Articleicon } from './Components/Articleicon';
import { Settingsicon } from './Components/Settingsicon';
import { Writeicon } from './Components/WriteIcon';

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  const [titleSize,setTitleSize] = useState(40);
  const [authortextSize,setAuthortextSize] = useState(18);
  const [articletextSize,setArticletextSize] = useState(16);
  const [theme,setTheme] = useState('Light')
  const [articleColor,setArticlecolor] = useState(theme=='Light'?'#000000':'#FFFFFF')
  const [pagecolor,setPagecolor] = useState(theme==='Light'?'#FFFFFF':'#000000')
  const [language,setLanguage] = useState('en-US')
  const [speakingspeed,setSpeakingspeed] = useState(1);
  values = {titleSize,setTitleSize,authortextSize,setAuthortextSize,articleColor,setArticlecolor,theme,setTheme,pagecolor,setPagecolor,articletextSize,setArticletextSize,
    language,setLanguage,speakingspeed,setSpeakingspeed}
  return (
  <TextSizes.Provider value={values}>
    <NavigationContainer>
    <Tab.Navigator barStyle={{backgroundColor:'white'}} shifting={true} >
    <Tab.Screen name="Article" component={Article}  options={{
      tabBarIcon:() => {
        return <Articleicon />
      }
    }}/>
   
    <Tab.Screen name="PostArticle" component={PostArticle} 
    options={{
      tabBarIcon:() => {
        return <Writeicon />
      }
    }}
     />
      <Tab.Screen name="Settings" component={Settings} 
    options={{
      tabBarIcon:() => {
        return <Settingsicon />
      }
    }} />

    </Tab.Navigator>
    </NavigationContainer>
  </TextSizes.Provider>
  );
  }


