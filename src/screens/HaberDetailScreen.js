import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const HaberDetailScreen = ({route, navigation}) => {
  const {haber, haberGuncelle} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <Text style={{fontSize: 20, padding: 15, color: '#000'}}>
          {haber.haberBaslik}
        </Text>
      </View>
      <View style={{alignSelf: 'flex-end', padding: 10}}>
        <Text style={{color: '#000', fontSize: 12}}>
          {haber.gecerlilikTarihi}
        </Text>
      </View>
      <Image source={{uri: haber.resim}} style={{width: '100%', height: 200}} />
      <View
        style={{
          padding: 10,
          backgroundColor: '#D8D8D8',
          flex: 1,
          marginTop: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <Text style={{color: '#000', fontSize: 14}}>{haber.haberIcerik}</Text>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            marginTop: 10,
          }}>{`Haberin detayları için ${haber.haberLinki} adresine bakınız.`}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('HaberUpdate', {
              haber: haber,
              haberGuncelle: haberGuncelle,
            })
          }
          style={styles.button}>
          <Text style={{color: '#fff'}}>Haberleri Güncelle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#D8D8D8',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  button: {
    backgroundColor: '#000',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
});
export default HaberDetailScreen;
