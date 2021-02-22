import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AlQuran, ArahKiblat, JadwalSolat} from '../../images';

const Item = (props) => {
  return (
    <View style={styles.MenuWrapper}>
      <TouchableOpacity>
        <View style={styles.MenuItem}>
          <Image source={props.icon} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem} />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.MenuItem} />
      </TouchableOpacity>
    </View>
  );
};

const Menu = () => {
  return (
    <View style={styles.container}>
      <Item icon={AlQuran} />
      <Item icon={ArahKiblat} />
      <Item icon={JadwalSolat} />
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
