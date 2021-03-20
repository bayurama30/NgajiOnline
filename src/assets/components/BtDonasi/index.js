import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BtDonasi = () => {
  return (
    <TouchableOpacity>
      <View style={styles.wrapper}>
        <Text style={styles.teks}>Donasi</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BtDonasi;

const styles = StyleSheet.create({
  wrapper: {
    width: 74,
    height: 25,
    backgroundColor: '#124B30',
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
