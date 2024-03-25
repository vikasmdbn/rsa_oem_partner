import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SlideInMenuProps {
  visible: boolean;
  onClose?: () => void;
}

const SlideInMenu: React.FC<SlideInMenuProps> = ({visible, onClose}) => {
  if (!visible) {
    return null; // Render nothing if the menu is not visible
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.iconContainer}>
          <Icon name="user" size={20} color="black" />
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>Rsa_oem</Text>
        </View>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>Electric</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>ONDC History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>Krutrim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>Ola Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={onClose}>
          <Text>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    backgroundColor: 'white',
    zIndex: 1,
    elevation: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 80, // Adjust this value to move the user info section further down
  },
  iconContainer: {
    marginLeft: 10,
  },
  userNameContainer: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left', // Align text to the left
  },
  menuItems: {
    marginTop: 20, // Adjust this value to change the space between the user info and menu items
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SlideInMenu;
