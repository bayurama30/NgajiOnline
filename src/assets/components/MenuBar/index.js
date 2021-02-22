import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MenuBar = () => {
  return (
    <View
      style={{
        backgroundColor: '#55B859',
        width: 319.98,
        height: 70,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 56,
      }}>
      <View style={styles.MenuWrapper}>
        <View style={styles.MenuItem} />
        <View style={styles.MenuItem} />
        <View style={styles.MenuItem} />
        <View style={styles.MenuItem} />
        <View style={styles.MenuItem} />
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
  },
  MenuItem: {
    width: 31.55,
    height: 30.39,
    backgroundColor: 'powderblue',
  },
});
