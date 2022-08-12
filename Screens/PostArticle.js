import axios from "axios";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Pressable,
  InputAccessoryView,
  ActivityIndicator,
  Keyboard
} from "react-native";
import InternetConnectionAlert from "react-native-internet-connection-alert";
import styles from "../Styles/PostArticleStyles";
import { TextSizes } from "../TextContext";

export default function PostArticle() {
  const inputAccessoryViewID = 'uniqueID';
  const { pagecolor, articleColor } = React.useContext(TextSizes);
  let keyboardTheme = pagecolor === "#FFFFFF" ? "light" : "dark";
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Anonymous");
  const [article, setArticle] = useState("");
  const [posting,setPosting] = useState(false);

  const postarticle = () => {
    
    if (title != "" && article != "") {
        setPosting(true);
      axios
        .post("https://curiousmindsbackend.herokuapp.com/addarticle", {
          title: title,
          author: author,
          article: article,
        })
        .then((res) => {
          setPosting(false);
          Alert.alert("Article under review,will be added shortly!");
          setTitle("");
          setAuthor("Anonymous");
          setArticle("");
        })
        .catch((error) => {
          setPosting(false);
          Alert.alert("Error", error);
        });
    } else {
      Alert.alert("Title and article should not be left empty");
    }
  };
  return (
  <InternetConnectionAlert>
    <SafeAreaView style={{ flex: 1, backgroundColor: pagecolor }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.shareyourthoughts, { color: articleColor }]}>
            Share your thoughts
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.title, { color: articleColor }]}>Title</Text>
          </View>
          <TextInput
            style={styles.input}
            value={title}
            placeholder="Day summarised in a word "
            onChangeText={(text) => setTitle(text)}
          />
          <Text style={[styles.author, { color: articleColor }]}>Author</Text>
          <TextInput
            style={styles.input}
            placeholder="I prefer to be Anonymous"
            onChangeText={(text) => setAuthor(text)}
            value={author}
          />
        </View>
        <View style={styles.articlecontainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              paddingLeft: 10,
              marginTop: 20,
              color: articleColor,
            }}
          >
            Article/thoughts
          </Text>
          <TextInput
            style={styles.article}
            textAlignVertical="top"
            keyboardType="default"
            multiline={true}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={(text) => setArticle(text)}
            keyboardAppearance={keyboardTheme}
            placeholder="Pour your heart out,Everyone's listening!"
            value={article}
          />
          <Pressable onPress={postarticle} style={styles.pressablestyle}>
            <View style={styles.buttonContainer}>
                {posting==false && (
                    <Text style={styles.buttontextstyle}>
                    Share it with the world!
                  </Text>
                )}
              {posting && (
                 <ActivityIndicator size="small" color="white" />
              )}
             
            </View>
          </Pressable>
        </View>
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID} >
      <Pressable onPress={() =>  Keyboard.dismiss()} style={[styles.pressablestyle,{marginBottom:10}]}>
            <View style={styles.keyboardbuttonContainer}>
              <Text style={styles.buttontextstyle}>
                Done
              </Text>
            </View>
          </Pressable>
      </InputAccessoryView>
    </SafeAreaView>
    </InternetConnectionAlert>
  );
}
