/* =======================================================
 *
 * Created by anele on 05/12/2022.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.screenConntainer}>
      <Text>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenConntainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;
