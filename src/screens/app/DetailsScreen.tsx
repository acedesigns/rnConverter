/* =======================================================
 *
 * Created by anele on 2022/10/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Currency Converter Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
