import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 70, height: 70, borderRadius: 70 / 2, marginRight: 15}}
      />
      <Text>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text style={styles.textJudul}>
        Materi Component dinamis dengan Props
      </Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            gambar="http://placeimg.com/70/70/tech?t=1594109627977"
            judul="Hobby"
          />
          <Story gambar="http://placeimg.com/70/70/nature" judul="Activities" />
          <Story gambar="http://placeimg.com/70/70/arch" judul="Daily" />
          <Story gambar="http://placeimg.com/70/70/tech" judul="Tech" />
          <Story
            gambar="http://placeimg.com/70/70/arch?t=1594109557442"
            judul="Favorite"
          />
          <Story gambar="http://placeimg.com/70/70/animals" judul="Animals" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  textJudul: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
});
