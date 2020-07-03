import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'green'}} />
      <Text>Sholikhin</Text>
      <Text>Hidayat</Text>
      <Say />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Say = () => {
  return <Text>Hello World!</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Ini Hewan!</Text>
        <Image
          source={{uri: 'http://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100}}
        />
      </View>
    );
  }
}

export default App;
