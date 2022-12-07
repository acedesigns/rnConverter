/* =======================================================
 *
 * Created by anele on 2022/10/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DistanceComp, WeightComp} from '../../components';

const data = [
  {label: 'Distance', value: 'length'},
  {label: 'Weight', value: 'weight'},
];

const HomeScreen = ({navigation}) => {
  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Select a Convertion
        </Text>
      );
    }
    return null;
  };

  useEffect(() => {
    if (value) {
    }
  }, [value]);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.heading}>
        <Text style={styles.headingTXT}> Choose what to Convert </Text>
      </View>
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

      {value != null ? <Text> we have a {value}</Text> : ''}
      {value != null && value === 'length' ? <DistanceComp /> : ''}
      {value != null && value === 'weight' ? <WeightComp /> : ''}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  heading: {
	marginBottom: 20,
  },
  headingTXT: {
	fontSize: 24,
	color: '#000',
	fontWeight: 'bold',
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
});
