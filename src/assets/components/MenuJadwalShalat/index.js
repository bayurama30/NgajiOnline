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
        <View style={styles.MenuItem}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem}></View>
      </TouchableOpacity>
    </View>
  );
};

const MenuJadwalShalat = () => {
  return (
    <View style={styles.container}>
      <Item />
    </View>
  );
};

export default MenuJadwalShalat;

const styles = StyleSheet.create({
  container: {
    width: 270.66,
    height: 290.66,
    marginTop: 90,
  },
  MenuWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  MenuItem: {
    width: 301.95,
    height: 61.57,
    backgroundColor: '#BFCDC7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    width: 110,
    height: 110,
  },
});
