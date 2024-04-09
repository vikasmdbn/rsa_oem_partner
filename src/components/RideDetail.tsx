import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RideDetail = ({route}: {route: any}) => {
  const {ride} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride Detail</Text>
      <Text>Type: {ride.type}</Text>
      <Text>Date: {ride.date}</Text>
      <Text>Time: {ride.time}</Text>
      {/* Add more details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RideDetail;
