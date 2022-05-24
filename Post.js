import { StyleSheet, Text, Pressable, View, Button, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { Fontisto, AntDesign,Octicons,MaterialCommunityIcons,Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';


export default function Contact({post}) {
  const[likes, setLikes]=useState(0);

  function addlikes(){
    setLikes(likes + 1)
  }
   
  return (
    <View style={styles.container}>
      
       <View style={{width: '100%', height: 240, marginTop: 80}}>
        <Text>{post}</Text>

        <View style={styles.footer}>
           <View style={{flexDirection: 'row',  alignContent: 'space-between', alignlikes: 'center'}}>
            <Pressable onPress={addlikes}>
            <AntDesign name="like1" size={18} color="black" />
             <Text style={styles.item}>{likes}</Text>
            </Pressable>
            </View>

           
      
        </View>

       </View>
      
          
      
      </View>

    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
        width: '100%',
        height: 105,
        padding: 2,
        backgroundColor: '#9E9E9E',
        borderWidth: 1,
        marginBottom: 50,
    
    },
    item:{
      fontSize: 15,
      color: 'black',
      

    },
     footer: {
        height: '15%',
        width: '100%',
        backgroundColor: "#9E9E9E",
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-evenly',
        marginTop: 40
 
    
    },
    footerButton2:{
      marginLeft: 60
    },
    footerButton:{
      marginLeft: 60
    }
})











const arr = ['a', 1, '2', false, "One"]
 const something = (x) => {
     console.log(x)
 }

 arr.forEach(something)
