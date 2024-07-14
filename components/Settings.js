import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';
import MenuIcon from './Menu';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuWrapper}>
        <MenuIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingTop: 50,
  },
  menuWrapper: {
    position: 'absolute',
    top: 74,
    left: 20,
  },
  text: {
    fontSize: 20,
    color: colors.black,
  },
});

export default Settings;
