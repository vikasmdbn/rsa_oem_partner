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
import History from './src/components/Rides';
import {Payments} from './src/components/Payements';
import {Insurance} from './src/components/Insurance';
import {About} from './src/components/About';
import HorizontalSlider from './src/components/HorizontalBar';
import {Account} from './src/components/Account';
import EditProfileScreen from './src/components/EditProfileScreen';
import RideDetail from './src/components/RideDetail';
import ContactForm from './src/components/ContactUs';
export const AuthContext = React.createContext<any>(false);
export type RootStackParamList = {
  Login: {};
  ForgotPassword: any;
  ChangePassword: {};
  LoggedIn: any;
  data: {title: string};
  HorizontalSlider: {title: string};
  RideDetail: {title: string};
  EditProfileScreen: any;
};
export type DrawerStackParamList = {
  Account: {};
  // EditProfileScreen: {};
  Home: {};
  Screen2: {title: string};
  History: {};
  Rides: {};
  // RideDetail: {};
  Payments: {};
  Insurance: {};
  ContactForm: {};
  About: {};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

const LoggedInStack = () => (
  <DrawerStack.Navigator>
    {/*<DrawerStack.Screen*/}
    {/*  name="EditProfileScreen"*/}
    {/*  component={EditProfileScreen}*/}
    {/*/>*/}
    <DrawerStack.Screen name="Home" component={HomeScreen} />
    {/*<DrawerStack.Screen name="History" component={HomeScreen} />*/}
    <DrawerStack.Screen name="Rides" component={History} />
    {/*<DrawerStack.Screen name="RideDetail" component={RideDetail} />*/}
    <DrawerStack.Screen name="Payments" component={Payments} />
    <DrawerStack.Screen name="Insurance" component={Insurance} />
    <DrawerStack.Screen name="Account" component={Account} />
    <DrawerStack.Screen name="ContactForm" component={ContactForm} />
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
            <RootStack.Screen
              name={'HorizontalSlider'}
              component={HorizontalSlider}
            />
            <RootStack.Screen name="RideDetail" component={RideDetail} />
            <RootStack.Screen
              name={'EditProfileScreen'}
              component={EditProfileScreen}
            />
          </RootStack.Navigator>
        ) : (
          <LoggedInStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
