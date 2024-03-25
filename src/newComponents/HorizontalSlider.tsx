import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const data = [...Array(10).keys()].map(i => ({
  key: String(i),
  text: `Item ${i + 1}`,
}));

const HorizontalSlider = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Ensure items are positioned horizontally
    alignItems: 'center', // Align items vertically in the center
    marginVertical: 10, // Add margin for spacing
    marginTop: 290,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginHorizontal: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default HorizontalSlider;
