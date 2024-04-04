import {Button, SafeAreaView, StyleSheet} from 'react-native';
import AppButton from '../AppButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthContext, RootStackParamList} from '../../../App';
import colors from '../../config/colors';
import AppTextInput from '../AppTextInput';
import {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const context = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <AppTextInput placeholder="Please enter phone Number" maxLength={10} />
      <AppTextInput placeholder="Please enter password" secureTextEntry />
      <AppButton
        title="Login"
        onPress={() => {
          AsyncStorage.setItem('userToken', 'token-dummy').then(() => {
            context.setIsLoggedIn(true);
          });
        }}
      />
      <Button
        title={'Forgot Password'}
        onPress={() => navigation.navigate('ForgotPassword')}
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
  textInput: {
    padding: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.secondary,
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginVertical: 12,
  },
});

export default Login;
