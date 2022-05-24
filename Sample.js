import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useState  } from 'react';
import Contact from './Contact';

export default function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [list, setList] = useState([])

  function transform(banannnas) {
    return <Contact name={banannnas.name} phone={banannnas.phoneNumber} />
  }

  function addContact(){
    setList([{name: name, phoneNumber: phoneNumber}, ...list])
    setName('')
    setPhoneNumber('')
  }

  return (
    <View style={styles.container}> 
      <View style={styles.inputFields}>
        <Text>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text>PhoneNumber</Text>
        <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} />  
        <TouchableOpacity onPress={addItems}>
        <AntDesign name="like2" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {list.map(item => transform(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFields: {
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    marginBottom: 20
  },
  input: {
    borderWidth: 1
  }
});
