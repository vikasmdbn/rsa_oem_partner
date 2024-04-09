import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import EditProfileScreen from './EditProfileScreen';
import {useNavigation} from '@react-navigation/native';
export const Account = () => {
  const navigation = useNavigation();

  const handlePressRSA = () => {
    navigation.navigate('EditProfileScreen');
  };
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>RSA</Text>*/}
      <TouchableOpacity onPress={handlePressRSA}>
        <View>
          <Text style={styles.title}>RSA</Text>
          <View style={[styles.section, styles.noMarginBottom]}>
            <Text style={[styles.sectionTitle, styles.space]}>
              +91 9945877879
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, styles.redText]}>
              vikasmd@gmail.com
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Corporate Profile</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Locations</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety & Privacy</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2-Step Verification</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data and Privacy</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ride Settings</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ride Insurance</Text>
      </View>
      <View style={styles.separator} />
      <Text style={styles.buttonText}>Logout</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 18,
  },
  section: {
    marginBottom: 10,
    marginTop: 10,
  },
  redText: {
    color: 'red',
  },
  space: {
    marginTop: 2,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 15,
    marginBottom: 5,
  },
  separator: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
