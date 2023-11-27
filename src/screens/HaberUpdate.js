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

const HaberUpdate = ({navigation, route}) => {
  const {haber, haberGuncelle} = route.params;

  const [haberBaslik, setHaberBaslik] = useState(haber.haberBaslik);
  const [haberKonusu, setHaberKonusu] = useState(haber.haberKonu);
  const [haberIcerik, setHaberIcerik] = useState(haber.haberIcerik);
  const [haberTarihi, setHaberTarihi] = useState(haber.gecerlilikTarihi);
  const [haberLinki, setHaberLinki] = useState(haber.haberLinki);

  const updateHaber = async () => {
    try {
      const response = await axios.put(
        `https://656378c7ee04015769a74316.mockapi.io/api/v1/haberler/${haber.id}`,
        {
          haberBaslik,
          haberKonusu,
          haberIcerik,
          haberTarihi,
          haberLinki,
        },
      );
      console.log('Haber Güncellendi');
      console.log(response);
      haberGuncelle(true);
      Alert.alert('Haber Güncellendi');
      navigation.navigate('Haberler');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHaber = async () => {
    try {
      const response = await axios.delete(
        `https://656378c7ee04015769a74316.mockapi.io/api/v1/haberler/${haber.id}`,
      );
      console.log('Haber Silindi');
      console.log(response);
      Alert.alert('Haber Silindi');
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
        <TouchableOpacity onPress={updateHaber} style={styles.button}>
          <Text style={{color: '#fff'}}>Haberi Güncelle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteHaber}
          style={[styles.button, {backgroundColor: 'red'}]}>
          <Text style={{color: '#fff'}}>Haberi Sil</Text>
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

export default HaberUpdate;
