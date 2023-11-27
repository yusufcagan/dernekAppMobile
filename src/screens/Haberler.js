import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenHeight, screenWidth} from '../utils/AppDimensions';
import colors from '../utils/Color';
import HaberCard from '../components/HaberCard';
import axios from 'axios';

const Haberler = ({navigation}) => {
  const [haberler, setHaberler] = useState([]);
  const [haberGuncelle, setHaberGuncelle] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://656378c7ee04015769a74316.mockapi.io/api/v1/haberler')
      .then(response => {
        setHaberler(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [haberGuncelle]);

  const filtreleHaberler = () => {
    const filtreliHaberler = haberler.filter(haber =>
      haber.haberBaslik.toLowerCase().includes(search.toLowerCase()),
    );
    return filtreliHaberler;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={t => setSearch(t)}
          style={styles.search}
        />
        <Image
          source={require('../assets/notification.png')}
          style={{width: 30, height: 30, marginLeft: 10}}
        />
      </View>
      <ScrollView style={{marginTop: 20}}>
        {filtreleHaberler().map(haber => (
          <HaberCard
            navigation={navigation}
            key={haber.id}
            haber={haber}
            haberGuncelle={setHaberGuncelle}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    margin: 10,
    padding: 10,
    width: screenWidth / 1.3,
    height: screenHeight / 20,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 2,
  },
});
export default Haberler;
