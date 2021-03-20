import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BtDonasi, CardWaktu, Lokasi, Menu, User} from '../../assets/components';
import background from '../../assets/images/background.png';
import {
  BarHomeScreen,
  BarWaktu,
  BarKalender,
  BarKompas,
  BarAkun,
} from '../../assets/images';

const Home = ({navigation}) => {
  const handleGoto = (screen) => {
    navigation.navigate(screen);
  };
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
        <View
          style={{
            backgroundColor: '#55B859',
            width: 340,
            height: 70,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            marginTop: 56,
          }}>
          <View style={styles.MenuWrapper}>
            <TouchableOpacity>
              <View>
                <Image source={BarHomeScreen} style={styles.iconBar} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              title="Waktu"
              onPress={() => handleGoto('Jadwal Shallat')}>
              <View>
                <Image source={BarWaktu} style={styles.iconBar} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              title="Kalender"
              onPress={() => handleGoto('Kalender')}>
              <View>
                <Image source={BarKalender} style={styles.iconBar} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={BarKompas} style={styles.iconBar} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={BarAkun} style={styles.iconBar} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
  MenuWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginHorizontal: 10,
    alignItems: 'center',
  },

  iconBar: {
    width: 35,
    height: 35,
  },
});
