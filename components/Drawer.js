import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Image, StyleSheet, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import profile from '../assets/images/profile.png';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Drawer = (props) => {
  const { state, descriptors, navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={profile} style={styles.profileImage} />
        <Text style={styles.profileText}>Uday Singh</Text>
      </View>
      {state.routes.map((route, index) => {
        const focused = index === state.index;
        const { drawerLabel, title } = descriptors[route.key].options;

        return (
          <DrawerItem
            key={route.key}
            label={() => (
              <Text style={[styles.drawerLabel, focused ? styles.drawerLabelFocused : null]}>
                {drawerLabel !== undefined ? drawerLabel : title !== undefined ? title : route.name}
              </Text>
            )}
            focused={focused}
            onPress={() => navigation.navigate(route.name)}
            style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.gray,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  drawerLabel: {
    color: colors.black,
  },
  drawerLabelFocused: {
    color: colors.white,
  },
  drawerItem: {
    backgroundColor: colors.white,
  },
  drawerItemFocused: {
    backgroundColor: colors.yellow,
  },
});

export default Drawer;
