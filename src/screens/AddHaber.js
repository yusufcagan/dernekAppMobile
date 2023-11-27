import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenHeight, screenWidth} from '../utils/AppDimensions';
import colors from '../utils/Color';
import axios from 'axios';

const AddHaber = ({navigation}) => {
  const [haberBaslik, setHaberBaslik] = useState('');
  const [haberKonusu, setHaberKonusu] = useState('');
  const [haberIcerik, setHaberIcerik] = useState('');
  const [haberTarihi, setHaberTarihi] = useState('');
  const [haberLinki, setHaberLinki] = useState('');

  const haberEkle = async () => {
    try {
      const response = await axios.post(
        'https://656378c7ee04015769a74316.mockapi.io/api/v1/haberler',
        {
          haberBaslik: haberBaslik,
          haberKonu: haberKonusu,
          haberIcerik: haberIcerik,
          haberTarihi: haberTarihi,
          haberLinki: haberLinki,
        },
      );
      console.log('Haber Eklendi');
      console.log(response);
      Alert.alert('Haber Eklendi');
      navigation.navigate('Haberler');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{margin: 22}}>
        <Text>Kendi Haberini Ekle</Text>
        <TextInput
          placeholder="Haber Başlığı"
          value={haberBaslik}
          onChangeText={h => setHaberBaslik(h)}
          style={styles.input}
        />
        <TextInput
          placeholder="Haber Konusu"
          value={haberKonusu}
          onChangeText={h => setHaberKonusu(h)}
          style={styles.input}
        />
        <TextInput
          placeholder="Haber Geçerlilik Tarihi"
          value={haberTarihi}
          onChangeText={h => setHaberTarihi(h)}
          style={styles.input}
        />
        <TextInput
          placeholder="Haber Detay Link"
          value={haberLinki}
          onChangeText={h => setHaberLinki(h)}
          style={styles.input}
        />
        <TextInput
          placeholder="Haber İçerik"
          value={haberIcerik}
          onChangeText={h => setHaberIcerik(h)}
          style={[styles.input, {height: screenHeight / 8}]}
        />
        <TouchableOpacity onPress={haberEkle} style={styles.button}>
          <Text style={{color: '#fff'}}>Haber Ekle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    padding: 10,
    width: screenWidth / 1.3,
    height: screenHeight / 20,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 2,
  },
  button: {
    backgroundColor: colors.primary,
    marginTop: 10,
    padding: 10,
    width: screenWidth / 1.3,
    height: screenHeight / 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 2,
  },
});

export default AddHaber;
