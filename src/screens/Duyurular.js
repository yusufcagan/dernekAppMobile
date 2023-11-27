import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenHeight, screenWidth} from '../utils/AppDimensions';
import colors from '../utils/Color';
import DuyuruCard from '../components/DuyuruCard';
import axios from 'axios';

const Duyurular = ({navigation}) => {
  const [duyurular, setDuyurular] = useState([]);

  useEffect(() => {
    axios
      .get('https://656378c7ee04015769a74316.mockapi.io/api/v1/duyurular')
      .then(response => {
        setDuyurular(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput placeholder="Search" style={styles.search} />
        <Image
          source={require('../assets/notification.png')}
          style={{width: 30, height: 30, marginLeft: 10}}
        />
      </View>
      <View style={{marginTop: 20}}>
        {duyurular.map(duyuru => (
          <DuyuruCard navigation={navigation} key={duyuru.id} duyuru={duyuru} />
        ))}
      </View>
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
export default Duyurular;
