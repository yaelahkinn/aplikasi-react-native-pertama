import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from './cart.png';

const PositionReactNative = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Positon</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <View>
        <Text style={styles.text}>Keranjang Belanja anda</Text>
      </View>
    </View>
  );
};

export default PositionReactNative;

const styles = StyleSheet.create({
  iconCart: {
    width: 50,
    height: 50,
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 25,
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    marginTop: 5,
    color: '#4b7bec',
  },
  notif: {
    color: '#FFFFFF',
    borderRadius: 10,
    backgroundColor: '#26de81',
    width: 24,
    height: 24,
    padding: 4,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
