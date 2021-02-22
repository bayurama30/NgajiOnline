import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardWaktu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.waktuSaatIni}>
        <Text style={styles.teks}>Waktu Saat Ini</Text>
        <Text style={styles.jam}>16:19</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.waktuSaatIni}>
        <Text style={styles.teks}>Waktu Magrib</Text>
        <Text style={styles.jam}>16:19</Text>
        <Text style={{color: 'white', fontSize: 8}}>1 Jam 58 Menit Lagi</Text>
      </View>
    </View>
  );
};

export default CardWaktu;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#55B859',
    width: 319.98,
    height: 120.07,
    marginTop: 18.7,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  waktuSaatIni: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 44,
  },
  teks: {
    color: 'white',
    fontSize: 16,
  },
  jam: {
    color: 'white',
    fontSize: 45,
  },
  line: {
    width: 4,
    height: 80.37,
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
