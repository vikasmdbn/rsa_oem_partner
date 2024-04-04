import AppTextInput from '../AppTextInput';
import AppButton from '../AppButton';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useState} from 'react';

export const ForgotPassword = () => {
  const [showPhone, setShowPhone] = useState(true);
  const onPressHandler = () => {
    if (showPhone) {
      // call API to get OTP.
    } else {
      // call API to Validate OTP.
    }
    setShowPhone(!showPhone);
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppTextInput
        placeholder={
          showPhone ? 'please enter phone number' : 'please enter OTP'
        }
        maxLength={10}
      />
      <AppButton
        title={showPhone ? 'Send OTP' : 'Validate OTP'}
        onPress={onPressHandler}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 56,
  },
});
