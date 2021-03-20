import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BtDonasi} from '../../assets/components';
import MenuJadwalShalat from '../../assets/components/MenuJadwalShalat';
import background from '../../assets/images/background.png';
import {
  BarHomeScreen,
  BarWaktu,
  BarKalender,
  BarKompas,
  BarAkun,
} from '../../assets/images';

const JadwalShallat = ({navigation}) => {
  const handleGoto = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.lokasiDonasi}>
          <Text style={styles.title}>Jadwal Shalat</Text>
          <BtDonasi />
        </View>
        <Text style={styles.desc}>Usahakan Shallat tepat Waktu</Text>
        <Text style={styles.waktu}>Sekarang Pukul 16:19</Text>
        <MenuJadwalShalat />
        <View style={{marginTop: 35}}>
          <View
            style={{
              backgroundColor: '#55B859',
              width: 340,
              height: 70,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 15,
              marginTop: 69,
            }}>
            <View style={styles.MenuWrapper}>
              <TouchableOpacity title="Home" onPress={() => handleGoto('Home')}>
                <View>
                  <Image source={BarHomeScreen} style={styles.iconBar} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
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
      </View>
    </ImageBackground>
  );
};

export default JadwalShallat;

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
  title: {
    fontSize: 24,
    color: 'white',
  },
  desc: {
    fontSize: 13,
    color: 'white',
    marginTop: 23,
  },
  waktu: {
    marginTop: 5,
    fontSize: 17,
    color: 'white',
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
