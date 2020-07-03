import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style= {{width: 80, height: 80, backgroundColor: 'green'}}/>
      <Text>Sholikhin</Text>
      <Text>Hidayat</Text>
      <Say />
      <Photo />
      <TextInput style={{borderWidth: 1}}/>
    </View>
  )
};

const Say = () => {
  return (
    <Text>Hello World!</Text>
  )
}

const Photo = () => {
  return (
      <Image 
        source= {{uri: 'http://placeimg.com/100/100/tech'}} 
        style={{width: 100, height: 100}}
      />
  )
}
export default App;