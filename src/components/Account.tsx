import {Text, View, StyleSheet} from 'react-native';

export const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RSA</Text>
      <View style={[styles.section, styles.noMarginBottom]}>
        <Text style={[styles.sectionTitle, styles.space]}>+91 9945877879</Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.redText]}>
          vikasmd@gmail.com
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Corporate Profile</Text>
        {/* Input field for corporate profile */}
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Locations</Text>
        {/* Input field for favorite locations */}
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety & Privacy</Text>
        {/* Input field for safety & privacy */}
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2-Step Verification</Text>
        {/* Input field for 2-step verification */}
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        {/* Input field for emergency contacts */}
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        {/* Input field for location */}
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data and Privacy</Text>
        {/* Input field for data and privacy */}
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ride Settings</Text>
        {/* Input field for ride settings */}
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ride Insurance</Text>
        {/* Input field for ride insurance */}
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
