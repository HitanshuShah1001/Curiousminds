import axios from 'axios';
import React, { useState } from 'react';
import {SafeAreaView,View,Text,TextInput, Button} from 'react-native';
import { TextSizes } from '../TextContext';

export default function PostArticle(){
    const {pagecolor,articleColor} = React.useContext(TextSizes)
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("Anonymous")
    const [article,setArticle] = useState("");


    const postarticle = () => {
        if(title!="" && article!=""){
        console.log('entering')
        axios.post('https://curiousmindsbackend.herokuapp.com/addarticle',{
            title:title,
            author:author,
            article:article
        }).then(res => {
            console.log(res)
        })
    }
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:pagecolor}}>
            {/* <View style={{flex:0.1,backgroundColor:'red'}}>
                <Text>Write</Text>
            </View> */}
            <View style={{paddingHorizontal:15,flex:1}}>
            <Text style={{fontSize:20,fontWeight:'600',paddingLeft:10}}>Title</Text>
            <TextInput style={{height:50,backgroundColor:'#efefef',borderRadius:20,marginTop:10,paddingLeft:10}} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={{fontSize:20,fontWeight:'600',paddingLeft:10,marginTop:20}}>Author</Text>
            <TextInput style={{height:50,backgroundColor:'#efefef',borderRadius:20,marginTop:10,paddingLeft:10}} onChangeText={(text) => setAuthor(text)} />
            </View>
            <View style={{paddingHorizontal:15,flex:2}}>
            <Text style={{fontSize:20,fontWeight:'600',paddingLeft:10,marginTop:20}}>Article/thoughts</Text>
            <TextInput style={{height:'80%',backgroundColor:'#efefef',borderRadius:20,paddingHorizontal:10,paddingVertical:10}} textAlignVertical="top" multiline={true} onChangeText={(text) => setArticle(text)}/>
            <Button title='Post' onPress={postarticle} />
            </View>
        </SafeAreaView>
    )
}