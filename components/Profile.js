import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import colors from '../assets/colors/colors';
import MenuIcon from './Menu'; // Ensure this is the correct path
import profileData from '../assets/data/profileData'; // Ensure this is the correct path

const Profile = () => {
  const profile = profileData[0]; // Assuming there's only one profile entry

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.menuWrapper}>
          <MenuIcon />
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.infoWrapper}>
              <Text style={styles.nameText}>{profile.Name}</Text>
              <Text style={styles.infoText}>DOB: {profile.DOB}</Text>
              <Text style={styles.infoText}>State: {profile.State}</Text>
              <Text style={styles.infoText}>Country: {profile.Country}</Text>
              <Text style={styles.infoText}>Email: {profile.email}</Text>
              <Text style={styles.infoText}>Phone: {profile.Phone}</Text>
            </View>
            <View style={styles.imageWrapper}>
              <Image source={profile.image} style={styles.profileImage} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  menuWrapper: {
    position: 'absolute',
    top: 54,
    left: 0,
  },
  card: {
    backgroundColor: colors.yellow,
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    shadowColor: colors.orange,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 0,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 70
  },
  infoWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 5,
  },
});

export default Profile;
