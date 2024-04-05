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
import {DailyPage} from './src/components/DailyPage';
import {OutstationPage} from './src/components/OutstationPage';
import {Wxyz} from './src/components/Wxyz';
import {ElectricPage} from './src/components/ElectricPage';
import {ParcelPage} from './src/components/ParcelPage';
import {ONDCFoodPage} from './src/components/ONDCFoodPage';
import {MoneyPage} from './src/components/MoneyPage';
import {AbcdPage} from './src/components/AbcdPage';
import {EVTestRidePage} from './src/components/EVTestRidePage';
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
  DailyPage: {};
  OutstationPage: {};
  Wxyz: {};
  ElectricPage: {};
  ParcelPage: {};
  ONDCFoodPage: {};
  MoneyPage: {};
  AbcdPage: {};
  EVTestRidePage: {};
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
    <DrawerStack.Screen name="DailyPage" component={DailyPage} />
    <DrawerStack.Screen name="OutstationPage" component={OutstationPage} />
    <DrawerStack.Screen name="Wxyz" component={Wxyz} />
    <DrawerStack.Screen name="ElectricPage" component={ElectricPage} />
    <DrawerStack.Screen name="ParcelPage" component={ParcelPage} />
    <DrawerStack.Screen name="ONDCFoodPage" component={ONDCFoodPage} />
    <DrawerStack.Screen name="MoneyPage" component={MoneyPage} />
    <DrawerStack.Screen name="AbcdPage" component={AbcdPage} />
    <DrawerStack.Screen name="EVTestRidePage" component={EVTestRidePage} />
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
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
