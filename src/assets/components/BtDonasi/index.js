import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BtDonasi = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.teks}>Donasi</Text>
    </View>
  );
};

export default BtDonasi;

const styles = StyleSheet.create({
  wrapper: {
    width: 74,
    height: 25,
    backgroundColor: 'green',
    padding: 2,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  teks: {
    fontSize: 12,
    color: 'white',
  },
});
