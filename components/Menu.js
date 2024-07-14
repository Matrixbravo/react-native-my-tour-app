// MenuIcon.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import colors from '../assets/colors/colors';

Feather.loadFont();

const MenuIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={styles.iconWrapper} // Added style here
    >
      <Feather name="menu" size={32} color={colors.yellow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    paddingHorizontal: 1, // Adjust this value to control the spacing
  },
});

export default MenuIcon;
