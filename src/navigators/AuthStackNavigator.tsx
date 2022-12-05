/* =======================================================
 *
 * Created by anele on 05/12/2022.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {WalkThroughScreen} from './../screens';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthStackNavigator = ({navigator}) => (
  <AuthStack.Navigator
    //initialRouteName="GetStarted"
    screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="walkThrough" component={WalkThroughScreen} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
