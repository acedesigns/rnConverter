/* =======================================================
 *
 * Created by anele on 05/12/2022.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import CustomDrawer from '../shared/drawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function NotificationsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Notification Screen </Text>
      <Button mode="contained"> yo </Button>
    </View>
  );
}

const DrawerStackNavigator = ({navigator})  => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    //initialRouteName="Notifications"
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen name="tabNav" component={BottomTabNavigator} />

    <Drawer.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{headerShown: true}}
    />
  </Drawer.Navigator>
);

export default DrawerStackNavigator;
