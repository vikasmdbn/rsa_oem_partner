import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

interface HamburgerMenuIconProps {
  onPress: () => void;
}

const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="menu" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default HamburgerMenuIcon;
