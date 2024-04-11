import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Ride = {
  type: string;
  date: string;
  time: string;
  image: string;
};

const rides: Ride[] = [
  {
    type: 'Car',
    date: '2024-04-01',
    time: '5 pm',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
  },
  {
    type: 'Car',
    date: '2024-03-28',
    time: '10 am',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
  },
  {
    type: 'Car',
    date: '2024-02-21',
    time: '12 pm',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
  },
  {
    type: 'Car',
    date: '2024-03-15',
    time: '7 pm',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
  },
  {
    type: 'Car',
    date: '2024-03-08',
    time: '7.30 am',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
  },
  {
    type: 'Car',
    date: '2024-02-17',
    time: '5.30 pm',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
  },
  {
    type: 'Car',
    date: '2024-02-12',
    time: '8.30 pm',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
  },
  {
    type: 'Car',
    date: '2024-02-08',
    time: '6.10 pm',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
  },
];
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayOfWeek = days[date.getDay()];
  const monthOfYear = months[date.getMonth()];
  const dayOfMonth = ('0' + date.getDate()).slice(-2);
  const hour = ('0' + (date.getHours() % 12 || 12)).slice(-2);
  const minute = ('0' + date.getMinutes()).slice(-2);
  const period = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${dayOfWeek}, ${monthOfYear} ${dayOfMonth}, ${hour}:${minute} ${period}`;
};
const History = () => {
  const navigation = useNavigation();
  const renderRideItem = ({item}: {item: Ride}) => (
    <View>
      <TouchableOpacity onPress={() => handleRidePress(item)}>
        <View style={styles.rideItem}>
          <Text style={styles.dateTime}>{formatDate(item.date)}</Text>
          <Text>{item.type}</Text>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    </View>
  );
  const handleRidePress = (ride: Ride) => {
    navigation.navigate('RideDetail', {ride});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rides</Text>
      <FlatList
        data={rides}
        renderItem={renderRideItem}
        keyExtractor={item => item.date}
        scrollIndicatorInsets={{left: -10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rideItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -25,
  },
  dateTime: {
    fontWeight: 'bold',
  },
  separator: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default History;
