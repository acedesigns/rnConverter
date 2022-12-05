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

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Main App Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
