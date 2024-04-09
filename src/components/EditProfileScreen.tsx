import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import {Alert} from 'react-native';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Validate the input fields (optional)
    if (!name || !phoneNumber || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Implement save logic here
    console.log('Saving profile data:', {name, phoneNumber, email, password});
    // You can send the data to your server or perform any other action

    // Clear the input fields
    setName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');

    // Show a success message
    Alert.alert('Success', 'Profile saved successfully!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.saveButtonContainer}>
        <Button title="Save" onPress={handleSave} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButtonContainer: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default EditProfileScreen;
