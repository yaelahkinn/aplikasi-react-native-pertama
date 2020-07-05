import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View style={{backgroundColor: 'grey', flexDirection: 'row'}}>
          <View style={{backgroundColor: '#ee5253', flex: 1, height: 50}} />
          <View style={{backgroundColor: '#feca57', flex: 1, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', flex: 1, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', flex: 1, height: 50}} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Trending</Text>
          <Text>Subcription</Text>
          <Text>Koleksi</Text>
          <Text>Account</Text>
        </View>

        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#d1d8e0',
            height: 130,
          }}>
          <Image
            source={{
              uri:
                'https://yt3.ggpht.com/a-/AOh14GiCSu8XRffu5jFn-mNgIKD3eDy5A95JY5wDB09qGw=s100-c-k-c0xffffffff-no-rj-mo',
            }}
            style={{
              marginRight: 10,
              marginLeft: 5,
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Sholikhin Hidayat
            </Text>
            <Text style={{fontStyle: 'normal', color: 'grey'}}>
              100K Subcriber
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
