// import {Text, View} from 'react-native';
//
// export const Insurance = () => {
//   return (
//     <View>
//       <Text>Welcome to Insurance</Text>
//     </View>
//   );
// };
// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
// import axios from 'axios';
//
// export const Insurance = () => {
//   const [products, setProducts] = useState([]);
//
//   useEffect(() => {
//     // Fetch data when component mounts
//     fetchData();
//   }, []);
//
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://dummyjson.com/products');
//       setProducts(response.data.products);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//
//   const renderProductItem = ({item}) => (
//     <View style={styles.productContainer}>
//       <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
//       <View style={styles.productInfo}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.description}>{item.description}</Text>
//         <Text style={styles.price}>Price: ${item.price}</Text>
//       </View>
//     </View>
//   );
//
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Product List</Text>
//       <FlatList
//         data={products}
//         renderItem={renderProductItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   productContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   thumbnail: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//   },
//   productInfo: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   description: {
//     marginBottom: 5,
//   },
//   price: {
//     fontWeight: 'bold',
//   },
// });
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

export const Insurance = () => {
  const [weatherData, setWeatherData] = useState<any>(null); // Using 'any' here

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/usa?unitGroup=metric&key=3JWMDLVSXTASB6NDUL5GHU6AA&contentType=json',
      );
      setWeatherData(response.data as any);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Weather Details for {weatherData.resolvedAddress}
      </Text>
      <Text>Description: {weatherData.description}</Text>
      <Text>Conditions: {weatherData.days[0].conditions}</Text>
      <Text>longitude: {weatherData.longitude}</Text>
      <Text>latitude: {weatherData.latitude}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
