import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/components/HomeScreen';
import Screen2 from './src/components/Screen2';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './src/components/Auth/Login';
import {ForgotPassword} from './src/components/Auth/ForgotPassword';
import {NavigationContainer} from '@react-navigation/native';
import {Rides} from './src/components/Rides';
import {Payments} from './src/components/Payements';
import {Insurance} from './src/components/Insurance';
import {Support} from './src/components/Support';
import {About} from './src/components/About';
export const AuthContext = React.createContext<any>(false);
export type RootStackParamList = {
  Login: {};
  ForgotPassword: any;
  ChangePassword: {};
  LoggedIn: any;
};
export type DrawerStackParamList = {
  Home: {};
  Screen2: {title: string};
  History: {};
  Rides: {};
  Payments: {};
  Insurance: {};
  Support: {};
  About: {};
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

const LoggedInStack = () => (
  <DrawerStack.Navigator>
    <DrawerStack.Screen name="Home" component={HomeScreen} />
    <DrawerStack.Screen name="History" component={HomeScreen} />
    <DrawerStack.Screen name="Rides" component={Rides} />
    <DrawerStack.Screen name="Payments" component={Payments} />
    <DrawerStack.Screen name="Insurance" component={Insurance} />
    <DrawerStack.Screen name="Support" component={Support} />
    <DrawerStack.Screen name="About" component={About} />
    <DrawerStack.Screen
      name="Screen2"
      component={Screen2}
      initialParams={{title: 'secondary'}}
    />
  </DrawerStack.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('userToken').then(token => {
      setIsLoggedIn(!!token);
    });
  }, []);
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <NavigationContainer>
        {!isLoggedIn ? (
          <RootStack.Navigator>
            <RootStack.Screen name={'Login'} component={Login} />
            <RootStack.Screen
              name={'ForgotPassword'}
              component={ForgotPassword}
            />
            <RootStack.Screen name={'LoggedIn'} component={LoggedInStack} />
          </RootStack.Navigator>
        ) : (
          <LoggedInStack />
        )}
        {/*<RootStack.screen name={}></RootStack.screen>*/}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
