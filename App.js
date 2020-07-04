import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import macbook from './macbookpro.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      {/* <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      /> */}

      <View
        style={{
          backgroundColor: '#f2f2f2',
          padding: 12,
          width: 212,
          borderRadius: 8,
        }}>
        <Image source={macbook} style={{width: 188, height: 107}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2019
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#F2994A'}}>
          Rp. 25.000.0000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View> //penutup view utama
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 20,
  },
});

const SampleComponent = () => {
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
