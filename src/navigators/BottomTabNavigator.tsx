/* =======================================================
 *
 * Created by anele on 05/12/2022.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

// ICONS
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  DetailsScreen,
  HomeScreen,
  AboutScreen,
  AirlineScreen,
} from '../screens/app';

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator inactiveColor="#CCF4FC">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#B06815',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Markets"
        options={{
          tabBarColor: '#F08D1D',
          tabBarIcon: ({color}) => (
            <Fontisto name="money-symbol" color={color} size={22} />
          ),
        }}
        component={DetailsScreen}
      />
      <Tab.Screen
        name="About"
        options={{
          tabBarColor: '#75450E',
          tabBarIcon: ({color}) => (
            <Foundation name="alert" color={color} size={26} />
          ),
        }}
        component={AboutScreen}
      />
      <Tab.Screen
        name="Airlinne"
        options={{
          tabBarColor: '#D67E1A',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="airplanemode-active" color={color} size={26} />
          ),
        }}
        component={AirlineScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    //position: 'absolute',
    //bottom: 10,
    //left: 3,
    //right: 3,
    //elevation: 0,
    backgroundColor: '#000',
    borderTopWidth: 0,
    //borderRadius: 15,
    //height: 70,
    //padding: 0,
  },
  tabBarText: {
    fontSize: 10,
    textTransform: 'uppercase',
    top: 5,
  },
});

export default BottomTabNavigator;
