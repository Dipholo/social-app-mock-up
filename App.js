import { AntDesign, Octicons, Fontisto, Ionicons, Feather } from '@expo/vector-icons';
import { StyleSheet, Text, Image, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useState  } from 'react';
import Contact from './Post';

export default function App() {
  const [post, setPost] = useState('');
  
  const [list, setList] = useState([])

  function transform(banannnas) {
    return <Contact post={banannnas.post} />
  }

  function addContact(){
    setList([{post: post,}, ...list])
    setPost('')
    
  }

  return (
  <View style={styles.container}> 
     
     <View style={{backgroundColor: '#263238', width: '100%',height:'10%', flexBasis: 'row', alignContent: 'space-between',padding: 10, alignItems: 'flex-start'}}>
      <TouchableOpacity>
      <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

    </View>


    <View style={styles.header}>
      <Image style={styles.profilePic}
        source={require('./assets/kanye.jpg')}/>
        <View style={styles.postDetails}>
          <Text style={styles.author}>Kanye West</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Fontisto name='world-o' size={15} color='white' />
            <Text style={styles.date}>Public </Text>
            <AntDesign name="caretdown" size={15} color="white" />
          </View>
        </View>
      </View>
        
    <View style={styles.post}>
      <View style={{width: '100%', height: 250 }}>
          <TextInput style={{width: '100%', height: 155, borderWidth: 1,justifyContent: 'flex-start'}} value={post} onChangeText={setPost} placeholder="What's on your mind?"/>

        <View style={{alignContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
          <TouchableOpacity onPress={addContact}>
          <Feather name="upload" size={24} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

      {list.map(item => transform(item))}
  </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#263238',
    alignItems: 'center',
    padding: 2,
    flex: 1

  },
  post:{
    backgroundColor: "#9E9E9E",
    width: '100%',
    height: '24%',
    marginTop: 4
  },
  header:{
    flexDirection: 'row',
    backgroundColor: "#212121",
    width: '100%',
    
  },
  profilePic:{
    height: 60,
    width: 60,
    margin:8,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white'
  },
  author: {
    fontSize: 20,
    fontWeight: '650',
    marginTop: 5,
    marginBottom: 5 ,
    color: "white" 
  },
  date:{
    color: "white",
    marginLeft: 5
    
  
}
});
