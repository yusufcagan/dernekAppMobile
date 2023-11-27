import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenWidth} from '../utils/AppDimensions';

const DuyuruCard = ({navigation, duyuru}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.header}>{duyuru.duyuruBaslik}</Text>
      <Text style={styles.konuText}>{duyuru.duyuruIcerik}</Text>
      <Text style={styles.konuText}>{duyuru.gecerlilikTarihi}</Text>
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
    color: '#000',
  },
});

export default DuyuruCard;
