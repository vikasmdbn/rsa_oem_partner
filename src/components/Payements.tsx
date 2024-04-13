import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';

export const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePayment = () => {
    if (paymentMethod === 'card') {
      // Payment with card logic
      if (cardNumber && expiryDate && cvv) {
        Alert.alert(
          'Payment Successful',
          'Your card payment has been processed successfully.',
        );
      } else {
        Alert.alert('Error', 'Please fill in all the required card details.');
      }
    } else if (paymentMethod === 'upi') {
      // Payment with UPI logic
      if (upiId) {
        Alert.alert(
          'Payment Successful',
          'Your UPI payment has been processed successfully.',
        );
      } else {
        Alert.alert('Error', 'Please fill in your UPI ID.');
      }
    }
  };

  return (
    <View style={styles.container}>
      {/*<Text style={styles.heading}>Enter your payment details</Text>*/}
      <View style={styles.paymentMethodContainer}>
        <Button
          title="Card"
          onPress={() => setPaymentMethod('card')}
          color={paymentMethod === 'card' ? '#007AFF' : '#333'}
        />
        <Button
          title="UPI"
          onPress={() => setPaymentMethod('upi')}
          color={paymentMethod === 'upi' ? '#007AFF' : '#333'}
        />
      </View>
      {paymentMethod === 'card' && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={text => setCardNumber(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date (MM/YYYY)"
            keyboardType="numeric"
            value={expiryDate}
            onChangeText={text => setExpiryDate(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            keyboardType="numeric"
            value={cvv}
            onChangeText={text => setCvv(text)}
          />
        </>
      )}
      {paymentMethod === 'upi' && (
        <TextInput
          style={styles.input}
          placeholder="UPI ID"
          value={upiId}
          onChangeText={text => setUpiId(text)}
        />
      )}
      <View style={styles.buttonContainer}>
        <Button title="Pay" onPress={handlePayment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
});
