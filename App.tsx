import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import PriceCalculation from './src/components/PriceCalculation';

import CustomerDetails from './src/components/CustomerDetails';

import HomeScreen from './src/components/HomeScreen';
import Screen2 from './src/components/Screen2';
// import styles from './src/config/styles';
export type RootStackParamList = {
  Screen1: {name: string};
  Screen2: {name: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //      <Stack.Screen name="Screen2" component={Screen2} initialParams={{name: 'Tyler'}}/>
    //     <Stack.Screen name="Screen1" component={HomeScreen} initialParams={{name: 'Tyler'}}/>

    //   </Stack.Navigator>
    // </NavigationContainer>
    //  <View style={styles.colors}>
    // <PriceCalculation vehiclePrice={600} distance={8}/>
    // //  </View>
    <CustomerDetails />
  );
};

const styles = StyleSheet.create({});

export default App;
