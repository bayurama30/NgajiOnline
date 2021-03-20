import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconLokasi} from '../../images';

const Lokasi = () => {
  return (
    <TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={IconLokasi} style={styles.icon} />
        <Text style={{color: 'white', fontSize: 12}}>Cempaka Putih</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Lokasi;

const styles = StyleSheet.create({
  icon: {
    width: 6,
    height: 10,
    marginRight: 5,
  },
});
