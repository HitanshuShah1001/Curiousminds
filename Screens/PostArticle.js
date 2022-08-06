import axios from 'axios';
import React, { useState } from 'react';
import {SafeAreaView,View,Text,TextInput, Button, Alert,ScrollView,Pressable} from 'react-native';
import styles from '../Styles/PostArticleStyles'
import { TextSizes } from '../TextContext';

export default function PostArticle(){
    const {pagecolor,articleColor} = React.useContext(TextSizes)
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("Anonymous")
    const [article,setArticle] = useState("");

    const postarticle = () => {
        if(title!="" && article!=""){
        axios.post('https://curiousmindsbackend.herokuapp.com/addarticle',{
            title:title,
            author:author,
            article:article
        }).then(res => {
            Alert.alert('Article under review,will be added shortly!');
            setTitle("");
            setAuthor("");
            setArticle("");
        }).catch(error => {
            Alert.alert('Error',error)
        })
    }
    else
    {
        Alert.alert('Title and article should not be left empty')   
    }
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:pagecolor}}>
            <ScrollView>
            <View style={styles.container}>
            <Text style={[styles.shareyourthoughts,{color:articleColor}]}>Share your thoughts</Text>
            <Text style={[styles.title,{color:articleColor}]}>Title</Text>
            <TextInput style={styles.input} value={title} placeholder="Day summarised in a word " onChangeText={(text) => setTitle(text)} />
            <Text style={[styles.author,{color:articleColor}]}>Author</Text>
            <TextInput style={styles.input} placeholder="I prefer to be Anonymous" onChangeText={(text) => setAuthor(text)} />
            </View>
            <View style={styles.articlecontainer}>
            <Text style={{fontSize:20,fontWeight:'600',paddingLeft:10,marginTop:20,color:articleColor}}>Article/thoughts</Text>
            <TextInput style={styles.article} textAlignVertical="top" multiline={true} onChangeText={(text) => setArticle(text)} placeholder = "Pour your heart out,Everyone's listening!"  value={article}/>
            <Pressable onPress={postarticle} style={styles.pressablestyle}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttontextstyle}>Share it with the world!</Text>
                </View>
            </Pressable>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}