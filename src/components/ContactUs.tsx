import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text, Linking} from 'react-native';
import {Formik, FormikValues} from 'formik';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleCallPress = () => {
    Linking.openURL('tel:+9945877879');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:vikasmd@gmail.com');
  };

  const handleSubmit = (
    values: FormikValues,
    {resetForm}: {resetForm: () => void},
  ) => {
    console.log(values); // You can replace this with your submission logic
    setSubmitted(true);
    resetForm();
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        mobileNumber: '',
        companyEmail: '',
      }}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          {submitted && (
            <Text style={styles.successMessage}>Submitted successfully!</Text>
          )}
          <Text style={styles.heading}>Contact Us</Text>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Name"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              value={values.message}
              placeholder="Message"
              multiline
              numberOfLines={4}
              style={[styles.input, styles.messageInput]}
            />
          </View>
          <View style={styles.submitContainer}>
            <View style={styles.submitBox}>
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          </View>
          <View style={styles.contactContainer}>
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Contact Number:</Text>
              <Text style={styles.contactDetail} onPress={handleCallPress}>
                +9945877879
              </Text>
            </View>
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Company Email:</Text>
              <Text style={styles.contactDetail} onPress={handleEmailPress}>
                vikasmd@gmail.com
              </Text>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  successMessage: {
    marginBottom: 10,
    color: 'green',
    fontWeight: 'bold',
  },
  submitContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  submitBox: {
    width: 350,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  contactContainer: {
    marginTop: 40,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactLabel: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactDetail: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ContactForm;
