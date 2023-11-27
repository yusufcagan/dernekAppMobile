import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenWidth} from '../utils/AppDimensions';

const HaberCard = ({navigation, haber, haberGuncelle}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('HaberDetailScreen', {
          haber: haber,
          haberGuncelle: haberGuncelle,
        })
      }
      style={styles.container}>
      <Text style={styles.header}>{haber.haberBaslik}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.konuText}>{haber.haberKonu}</Text>
        <Text style={styles.konuText}>{haber.gecerlilikTarihi}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 100,
    backgroundColor: '#D8D8D8',
    borderRadius: 10,
    marginTop: 10,
  },
  header: {
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  konuText: {
    padding: 10,
    marginTop: 30,
    color: '#000',
  },
});

export default HaberCard;
