import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

interface DataItem {
  key: string;
  text: string;
  image: string;
  screen: string;
}
interface HorizontalSliderProps {
  navigation: NavigationProp<any, any>; // Import NavigationProp from @react-navigation/native
}
const data: DataItem[] = [
  {
    key: '1',
    text: 'Daily',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSn1hT5tcd5-LnF6rgwoKwtmjhyvkNwCvDg&usqp=CAU',
    screen: 'DailyPage',
  },
  {
    key: '2',
    text: 'Outstation',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDpsFH4Q7oj16vCZcHhzt8S6GCGAVFbhPXRXiCLPYxQ&s',
    screen: 'OutstationPage',
  },
  {
    key: '3',
    text: 'Wxyz',
    image:
      'https://as1.ftcdn.net/v2/jpg/01/30/82/92/1000_F_130829217_CFLl4i8S3xgcvVtjfCG6x7jzbAxl1iF4.jpg',
    screen: 'Wxyz',
  },
  {
    key: '4',
    text: 'Electric',
    image:
      'https://inc42.com/wp-content/uploads/2020/12/ola-ev-price-feature-image1-1-scaled.jpg',
    screen: 'ElectricPage',
  },
  {
    key: '5',
    text: 'Rentals',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KQnZopgwqUukfrQJ0Bnk5wEHhPDhZ39UGw&usqp=CAU',
    screen: 'RentalsPage',
  },
  {
    key: '6',
    text: 'Parcel',
    image:
      'https://static.vecteezy.com/system/resources/previews/002/335/543/non_2x/delivery-man-parcel-handover-to-customer-cartoon-art-illustration-vector.jpg',
    screen: 'ParcelPage',
  },
  {
    key: '7',
    text: 'ONDC Food',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhemdCRU0bwlrSF99GSBAD9zHNHCrM5eErA&usqp=CAU',
    screen: 'ONDCFoodPage',
  },
  {
    key: '8',
    text: 'Money',
    image:
      'https://thumbs.dreamstime.com/b/various-kind-money-packing-bundles-bank-notes-bills-fly-gold-coins-flat-vector-cartoon-illustration-objects-isolated-175981477.jpg',
    screen: 'MoneyPage',
  },
  {
    key: '9',
    text: 'Abcd',
    image:
      'https://cdn.pixabay.com/photo/2013/07/12/18/20/paper-153317_960_720.png',
    screen: 'AbcdPage',
  },
  {
    key: '10',
    text: 'EV Test Ride',
    image:
      'https://png.pngtree.com/png-vector/20230107/ourmid/pngtree-flat-scooter-png-image_6554348.png',
    screen: 'EVTestRidePage',
  },
];

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({navigation}) => {
  const renderItem = ({item}: {item: DataItem}) => (
    <TouchableOpacity style={styles.item}>
      {/*onPress={() => navigation.navigate(item.screen)}*/}
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginTop: 481,
  },
  item: {
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
});

export default HorizontalSlider;
