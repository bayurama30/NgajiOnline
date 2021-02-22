import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  AlQuran,
  ArahKiblat,
  JadwalSolat,
  Kalender,
  Dzikir,
  AsmaulHusna,
  Shalawat,
  Ngaji,
  Masjid,
} from '../../images';

const Item = () => {
  return (
    <View style={styles.MenuWrapper}>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={AlQuran} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={ArahKiblat} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={JadwalSolat} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Item1 = () => {
  return (
    <View style={styles.MenuWrapper}>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={Kalender} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={Dzikir} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={AsmaulHusna} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Item2 = () => {
  return (
    <View style={styles.MenuWrapper}>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={Shalawat} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={Ngaji} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={Masjid} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Menu = () => {
  return (
    <View style={styles.container}>
      <Item />
      <Item1 />
      <Item2 />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: 270.66,
    height: 290.66,
  },
  MenuWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  MenuItem: {
    width: 81.66,
    height: 81.66,
    backgroundColor: '#BFCDC7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 110,
    height: 110,
  },
});
