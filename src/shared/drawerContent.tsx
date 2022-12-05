/* eslint-disable react-native/no-inline-styles */
/* =======================================================
 *
 * Created by anele on 05/12/2022.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, {useContext} from 'react';
import {Drawer} from 'react-native-paper';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

import {AuthContext} from '../components/context';

const CustomDrawer = (props) => {
  const {logOutMethod} = useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#C1CED6'}}>
        <ImageBackground
          source={{
            uri: 'https://groupvisual.io/designinganalytics/wp-content/uploads/2016/08/dvux.png',
          }}
          resizeMode="contain"
          style={{padding: 20}}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg',
            }}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
              fontWeight: 'bold',
            }}>
            Dillion Phiri
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#000', paddingTop: 10}}>
          {/* <DrawerItemList {...props} /> */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={'#fff'} size={size} />
              )}
              label="HOME"
              inactiveTintColor={'#fff'}
              activeTintColor="#e32f45"
              onPress={() => {
                props.navigation.navigate('tabNav');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="event" color={'#fff'} size={size} />
              )}
              label="EVENTS"
              inactiveTintColor={'#fff'}
              activeTintColor="#e32f45"
              onPress={() => {
                props.navigation.navigate('Events');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} color={'#fff'} />
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logOutMethod();
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color={'#fff'} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
                color: '#fff',
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerSection: {
    //marginTop: 15,
  },
});

export default CustomDrawer;