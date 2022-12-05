/* =======================================================
 *
 * Created by anele on 2022/10/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import {AuthContext} from './src/components/context';
import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, ActivityIndicator, View} from 'react-native';

import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import DrawerStackNavigator from './src/navigators/appDrawerNavigator';

const App = () => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  const authContext = useMemo(
    () => ({
      logInMethod: async () => {
        setIsLoading(false);
        setUserToken('abc');
      },
      logOutMethod: async () => {
        setIsLoading(false);
        setUserToken(null);
      },
      registerMethod: async () => {
        setIsLoading(false);
        setUserToken('abc');
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      setTimeout(() => {
        setIsLoading(false);
      });
    }, 4000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <StatusBar hidden={true} />
        {userToken !== null ? (
          <DrawerStackNavigator navigator={undefined} />
        ) : (
          <AuthStackNavigator navigator={undefined} />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
