/* =======================================================
 *
 * Created by anele on 07/12/2022.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, Text, TextInput, View, Alert} from 'react-native';

const DistanceComp = () => {
  const [number, onChangeNumber] = useState<number>();

  const milesToKms = (miles: any) => {
    let final = miles * 1.60934;
    Alert.alert(final.toString() + ' km');
  };

  return (
    <View style={styles.distCont}>
      <Text>Enter the distance & it will be converted to km</Text>
      <View style={styles.inputCon}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.BtnCont}>
        <Button mode="contained" onPress={() => milesToKms(number)}>
          Convert
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  distCont: {
    marginTop: 20,
    flex: 1,
  },
  inputCon: {
    width: '100%',
  },
  BtnCont: {
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DistanceComp;
