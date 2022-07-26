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
  Image
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Divider from "../Components/Divider";
import * as Speech from "expo-speech";
import { TextSizes } from "../TextContext.js";
export default function Article() {
  const { titleSize, authortextSize, articletextSize,articleColor,pagecolor } =
    React.useContext(TextSizes);
  const [imagesource,setImagesource] = useState(require('../images/pause.png'))
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");
  const [tospeak, SettoSpeak] = useState(false);
  console.log(titleSize, authortextSize, articletextSize);
  useEffect(() => {
    getanother();
    Speech.getAvailableVoicesAsync().then(res => {
      console.log(res)
    })
  }, []);

  const Sharearticle = () => {
    Speech.pause()
    setImagesource(require('../images/play-button.png'))
    Share.share({
      message: article.toString(),
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const Speak = () => {
    SettoSpeak(true);
    const thingtoSay = article;
    Speech.speak(thingtoSay,{language:"ar-SA"});
    Speech.isSpeakingAsync().then(res => {
      console.log(res)
    })
  };



  const CheckStatus = () => {
    if(imagesource===require('../images/pause.png')){
      setImagesource(require('../images/play-button.png'))
      Speech.pause()
    }
    else{
      setImagesource(require('../images/pause.png'))
      Speech.resume()
    }
  }

  const getanother = () => {
    Speech.stop()
    setImagesource(require('../images/pause.png'))
    SettoSpeak(false);
    axios
      .get("https://curiousmindsbackend.herokuapp.com/article")
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setArticle(res.data.article);
      });
  };

  const StopAudio = () => {
    Speech.stop()
    SettoSpeak(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: pagecolor }}>
      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          alignItems:'center'
        }}
      >
        <Button title="Listen " onPress={Speak} />
        <Button title={`Read another`} onPress={getanother} />
        <Button title="Share " onPress={Sharearticle} />
      </View>
      {tospeak && <View style={{ flexDirection: "row", flex: 0.1,paddingHorizontal:15,flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
        {/* <Button title="Pause" onPress={Pausespeech} /> */}
        <Pressable onPress={CheckStatus}>
          <Image source={imagesource} style={{height:25,width:25}} />
        </Pressable>
        <Pressable onPress={StopAudio}>
          <Image source={require('../images/stop-button.png')} style={{height:35,width:35}} />
        </Pressable>
        </View>}
      {article == "" && <ActivityIndicator size={"large"} />}
      {article != "" && (
        <ScrollView style={{ flex: 1.5 }}>
          <Text
            style={{
              paddingHorizontal: 15,
              fontSize: titleSize,
              fontWeight: "700",
              alignSelf: "flex-start",
              color: articleColor,
            }}
          >
            {title}
          </Text>
          <Divider />
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: authortextSize,
              fontWeight: "600",
              alignSelf: "flex-end",
              marginTop: 20,
              color: articleColor,
            }}
          >
            {" "}
            By :- {author}
          </Text>
          <Text
            style={{
              paddingHorizontal: 15,
              alignSelf: "center",
              marginTop: 20,
              fontSize: articletextSize,
              letterSpacing: 2,
              color: articleColor,
            }}
          >
            {article}
          </Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
