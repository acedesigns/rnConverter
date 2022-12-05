/* =======================================================
 *
 * Created by anele on 05/12/2022.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AirlineScreen = () => {
  const airports = require('../../data/airports.json');
  const [airport, setAirport] = useState<any>('');

  useEffect(() => {
    setTimeout(async () => {
      setTimeout(() => {
        //setIsLoading(false);
        setAirport(airports);
      });
    }, 4000);
  }, [airports]);

  return (
    <View style={styles.screenConntainer}>
      <Text>Airline Screen</Text>
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

export default AirlineScreen;
