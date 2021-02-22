import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  BarHomeScreen,
  BarWaktu,
  BarKalender,
  BarKompas,
  BarAkun,
} from '../../images';

const MenuBar = () => {
  return (
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
          <View style={styles.MenuItem}>
            <Image source={BarHomeScreen} style={styles.iconBar} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.MenuItem}>
            <Image source={BarWaktu} style={styles.iconBar} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.MenuItem}>
            <Image source={BarKalender} style={styles.iconBar} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.MenuItem}>
            <Image source={BarKompas} style={styles.iconBar} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.MenuItem}>
            <Image source={BarAkun} style={styles.iconBar} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
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
