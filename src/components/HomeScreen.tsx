import {View, SafeAreaView, StyleSheet, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {VehicleBottomSheet} from './VehicleBottomSheet';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import HorizontalBar from './HorizontalBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type LatLongType = {
  latitude: number;
  longitude: number;
};

const HomeScreen = () => {
  const [pickUpSuggetionList, setPickUpSuggetionList] = useState({});
  const [dropSuggetionList, setDropSuggetionList] = useState({});
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const hasPickUpData = Object.keys(pickUpSuggetionList).length > 0;
  const hasDropData = Object.keys(dropSuggetionList).length > 0;

  // const location1 = {
  //   latitude: 12.906816899999999,
  //   longitude: 77.56352473621337,
  //   latitudeDelta: 0.015,
  //   longitudeDelta: 0.0121,
  // };
  // const location2 = {
  //   latitude: 12.905897401483081,
  //   longitude: 77.55948543548584,
  //   latitudeDelta: 0.015,
  //   longitudeDelta: 0.0121,
  // };
  const mapArea = {
    latitude: 12.906775855682382,
    longitude: 77.56171703338624,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  // return <Button title={'click Me'} />;
  return (
    <SafeAreaView>
      {/* <TouchableOpacity onPress={() => {navigation.push('Screen2')}}><Text>{route.params.name}</Text></TouchableOpacity> */}

      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={mapArea}>
          <View style={styles.searchContainer}>
            <GooglePlacesAutocomplete
              placeholder="Enter pick up location"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(details?.geometry);
                setPickUpSuggetionList({
                  latitude: details?.geometry?.location?.lat,
                  longitude: details?.geometry?.location?.lng,
                });
              }}
              query={{
                key: 'AIzaSyCfNyaUtMXGJ2hbGkmvOb_1vDCHifePbz4',
                language: 'en',
              }}
              fetchDetails={true}
            />
            <GooglePlacesAutocomplete
              styles={{position: 'absolute', marginTop: 52, top: 50}}
              placeholder="Enter drop location"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(details?.geometry);
                if (
                  details?.geometry?.location?.lat &&
                  details?.geometry?.location?.lng
                ) {
                  setDropSuggetionList({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  });
                }
              }}
              query={{
                key: 'AIzaSyCfNyaUtMXGJ2hbGkmvOb_1vDCHifePbz4',
                language: 'en',
              }}
              fetchDetails={true}
            />
          </View>

          {hasPickUpData && hasDropData ? (
            <MapViewDirections
              origin={pickUpSuggetionList as LatLongType}
              destination={dropSuggetionList as LatLongType}
              apikey={'AIzaSyCF4vPsnv8_d4HHsL-SuBCBNcmcyTLOlXU'} // insert your API Key here
              strokeWidth={4}
              strokeColor="#111111"
            />
          ) : null}
          {hasPickUpData ? (
            <Marker coordinate={pickUpSuggetionList as LatLongType}>
              {/* <CustomMarker/> */}
            </Marker>
          ) : null}
          {hasPickUpData && hasDropData ? (
            <Marker coordinate={dropSuggetionList as LatLongType} />
          ) : null}
        </MapView>
        <HorizontalBar />
        <VehicleBottomSheet onSelectCallback={() => console.log('clicked')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // trial css
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    //   justifyContent: 'flex-end',
    //   alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#007bff',
    borderColor: '#eee',
    borderRadius: 5,
    elevation: 10,
  },
  text: {
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d1d1d1',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    color: '#7a7a77',
  },
  searchContainer: {
    display: 'flex',
  },
});

// const CustomMarker = () => {
//   return (
//     <View style={styles.marker}>
//       <Text style={styles.text}>Pickup</Text>
//     </View>
//   );
// };

export default HomeScreen;
