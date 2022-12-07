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
import {Alert, StyleSheet, Text, View, TextInput} from 'react-native';

const WeightComp = () => {
  const [number, onChangeNumber] = useState<number>();

  const poundToKg = (pound: any) => {
    let final = pound * 0.453592;
    Alert.alert(final.toString() + " kg's");
  };

  return (
    <View style={styles.weightCont}>
      <Text>Enter the number & it will be conerted to Kg's</Text>
      <View style={styles.HeadingStyls}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
        />

        <Button mode="contained" onPress={() => poundToKg(number)}>
          Convert
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weightCont: {
    flex: 1,
    padding: 5,
  },
  HeadingStyls: {
    marginTop: 15,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export default WeightComp;
