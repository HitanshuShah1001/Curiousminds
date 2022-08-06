import React from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  Button,
  Share,
  Pressable,
  Image,
  Alert
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Divider from "../Components/Divider";
import * as Speech from "expo-speech";
import { TextSizes } from "../TextContext.js";
import DropdownComponent from "../Components/Dropdowncomponent";
import BetaListen from "../Components/BetaListen";
import styles from '../Styles/ArticleStyles';
import { PAUSE,PLAY, STOP } from "../Sources/Imagesources";
export default function Article() {
  const { titleSize, authortextSize, articletextSize,articleColor,pagecolor,language,speakingspeed,setSpeakingspeed } =
    React.useContext(TextSizes);

  const [imagesource,setImagesource] = useState(PAUSE)
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");
  const [loading,setLoading] = useState(false);
  const [tospeak, SettoSpeak] = useState(false);
  const [visible,setVisible] = useState(false);
  useEffect(() => {
    getarticle();
  }, []);

  useEffect(() => {
    Speech.isSpeakingAsync().then(res => {
      if(res === true){
        Speech.stop()
        Speech.speak(article,{language:language})
        setImagesource(PAUSE)
      }
    })
    
  },[language])

  // useEffect(() => {
  // },[])

  const Sharearticle = () => {
    Speech.pause()
    setImagesource(PLAY)
    Share.share({
      message: title.toString() + '\n' + author.toString() + '\n' + article.toString(),
    })
      .then((result) => Alert.alert('Article shared!'))
      .catch((error) => Alert.alert(error));
  };

  const Speak = () => {
    setVisible(false);
    SettoSpeak(true);
    const thingtoSay = article;
    Speech.speak(thingtoSay,{rate:speakingspeed,pitch:0.85,language:language});
  };



  const CheckStatus = () => {
    if(imagesource===PAUSE){
      setImagesource(PLAY)
      Speech.pause()
    }
    else{
      setImagesource(PAUSE)
      Speech.resume()
    }
  }

  const getarticle = () => {
    setLoading(true);
    Speech.stop()
    setImagesource(PAUSE)
    SettoSpeak(false);
    axios
      .get("https://curiousmindsbackend.herokuapp.com/getarticles")
      .then((res) => {
        setLoading(false);
        setTitle(res.data.data.curiousarticle.title);
        setAuthor(res.data.data.curiousarticle.author);
        setArticle(res.data.data.curiousarticle.article);
      }).catch(error => {
        Alert.alert(error.response)
      });
  };

  const StopAudio = () => {
    Speech.stop()
    setImagesource(PAUSE)
    SettoSpeak(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: pagecolor }}>
      <BetaListen visible={visible} click={Speak}/>
      <View
        style={styles.header}
      >
        <Button title="Listen " onPress={() => setVisible(true)} />
        <Button title={`Read another`} onPress={getarticle} />
        <Button title="Share " onPress={Sharearticle} />
      </View>
      {tospeak && <View style={styles.listencontainer}>
        <Pressable onPress={CheckStatus}>
          <Image source={imagesource} style={styles.image} />
        </Pressable>
        <DropdownComponent />
        {/* <SpeedDropdownComponent /> */}
        {/* <DropdownComponent /> */}
        <Pressable onPress={StopAudio}>
          <Image source={STOP} style={styles.image} />
        </Pressable>
        </View>}
      {(article == "" || loading) && <ActivityIndicator size={"large"} />}
      {article != "" && (
        <ScrollView style={{ flex: 1.5 }}>
          <Text
            style={[styles.title,{color:articleColor,fontSize:titleSize}]}
          >
            {title}
          </Text>
          <Divider />
          <Text
            style={[styles.author,{color:articleColor,fontSize:authortextSize}]}
          >
            
            By :- {author}
          </Text>
          <Text
            style={[styles.article,{color:articleColor,fontSize:articletextSize}]}
          >
            {article}
          </Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
