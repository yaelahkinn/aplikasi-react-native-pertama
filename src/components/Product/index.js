import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from './../../assets/Images/macbookpro.jpg';

const Product = props => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>

      <View style={styles.wrapper}>
        <Image source={macbook} style={styles.imageProduct} />
        <Text style={styles.titleProduct}>New Macbook Pro 2019</Text>
        <Text style={styles.price}>Rp. 25.000.0000</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View> //penutup view utama
  );
};

export default Product;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 20,
  },
  wrapper: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {
    width: 188,
    height: 107,
  },
  titleProduct: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
