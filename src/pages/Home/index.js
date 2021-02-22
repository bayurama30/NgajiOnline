import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  BtDonasi,
  CardWaktu,
  Lokasi,
  Menu,
  MenuBar,
  User,
} from '../../assets/components';
import background from '../../assets/images/background.png';

const Home = () => {
  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.lokasiDonasi}>
          <Lokasi />
          <BtDonasi />
        </View>
        <CardWaktu />
        <View style={styles.teksUser}>
          <User />
        </View>
        <Menu />
        <MenuBar />
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 31,
    paddingVertical: 51,
    alignItems: 'center',
  },
  lokasiDonasi: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 470,
    height: 30,
    padding: 5,
    alignItems: 'center',
  },
  teksUser: {
    alignSelf: 'flex-end',
    marginTop: 24.6,
    marginRight: 30,
    marginBottom: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
