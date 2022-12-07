/* =======================================================
 *
 * Created by anele on 05/12/2022.
 *
 * @anele_ace
 *
 * =======================================================
 */

import axios from 'axios';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {label: 'OR Tambo', value: 'JNB'},
  {label: 'Lanseria', value: 'HLA'},
  {label: 'Cape Town', value: 'CPT'},
  {label: 'King Shaka', value: 'DUR'},
];

const config = {
  headers: {
    'X-RapidAPI-Key': '96d8d96d0dmsh92aec14a72add2ap153e6ajsnd31719630ba4',
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
  },
};

const AirlineScreen = () => {
  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [airport, setAirport] = useState<any | null>();

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Select an Airport
        </Text>
      );
    }
    return null;
  };

  useEffect(() => {
    if (value) {
      //console.log('request made');
      //console.log(value);
      axios
        .get(
          'https://aerodatabox.p.rapidapi.com/airports/iata/' + value,
          config,
        )
        .then((response: any) => {
          //console.log(response.data);
          setAirport(response.data);
        })
        .catch(function (error: Error) {
          // handle error
          console.log(error);
        });
    }
  }, [value]);

  return (
    <View style={styles.screenContainer}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
      {value !== null ? (
        <Text> {JSON.stringify(airport?.shortName)} ... </Text>
      ) : (
        ''
      )}

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -30.559483,
          longitude: 22.937506,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        //maxZoomLevel={8}
        minZoomLevel={4}
        zoomControlEnabled={true}
        mapType={'standard'}
        style={styles.mapStyle}>
        <Marker
          coordinate={{
            latitude: -26.1392,
            longitude: 28.246,
          }}
          />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  mapStyle: {
    width: '100%',
    height: 300,
    marginTop: 10,
  },
});

export default AirlineScreen;
