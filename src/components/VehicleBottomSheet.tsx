import {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

type vehicleItemT = {
  id: number;
  vehicleType: 'Flat Bed' | 'Hook Tow';
  minPrice: number;
  maxPrice: number;
};

const data: vehicleItemT[] = [
  {
    id: 1,
    vehicleType: 'Flat Bed',
    minPrice: 500,
    maxPrice: 1000,
  },
  {
    id: 2,
    vehicleType: 'Hook Tow',
    minPrice: 1000,
    maxPrice: 2000,
  },
];

type VehicleBottomSheetProps = {
  onSelectCallback: (item: vehicleItemT) => never;
};

export const VehicleBottomSheet = ({
  onSelectCallback,
}: VehicleBottomSheetProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        data={data}
        renderItem={({item, index}) => (
          <TouchableHighlight
            underlayColor="#8a8a8a"
            onPress={() => {
              if (index !== selectedIndex) {
                setSelectedIndex(index);
                onSelectCallback(item);
              }
            }}>
            <View
              style={{
                ...styles.listItem,
                backgroundColor: index === selectedIndex ? '#ddd' : '#fff',
              }}>
              <Text style={styles.listItemTitle}>{item.vehicleType}</Text>
              <Text
                style={
                  styles.listItemText
                }>{`${item.minPrice} Rs - ${item.maxPrice} Rs`}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: windowHeight / 3,
    position: 'absolute',
    bottom: 0,
    paddingTop: 12,
    paddingBottom: 12,
  },
  listItem: {
    padding: 8,
    borderRadius: 2,
  },
  listItemText: {
    margin: 4,
  },
  listItemTitle: {
    margin: 4,
    fontWeight: 'bold',
  },
});
