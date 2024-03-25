import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import SlideInMenu from './SlideInMenu';
import CarList from './CarList';
// import Icon from 'react-native-vector-icons/FontAwesome';
import HorizontalSlider from './HorizontalSlider';


export const Homepage = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.iconContainer}>
          <HamburgerMenuIcon onPress={toggleMenu} />
          <View style={styles.dot}></View>
        </View>
        <TextInput placeholder="Pin location..." style={styles.input} />
        <View style={styles.rightContainer}>
          <MaterialIcons
            name="favorite"
            size={20}
            color="black"
            style={styles.rightIcon}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <HorizontalSlider />
        <CarList />
      </View>
      <SlideInMenu visible={menuVisible} onClose={closeMenu} />
      {menuVisible && <View style={styles.overlay} onTouchStart={closeMenu} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  navbar: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: 48,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
    }),
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    padding: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'lightgreen',
    marginLeft: 10,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  rightIcon: {
    marginRight: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Homepage;
