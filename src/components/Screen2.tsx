import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewProps
  } from 'react-native';
  import type { NativeStackScreenProps } from '@react-navigation/native-stack';
  import type {RootStackParamList} from '../../App'

  type Props = NativeStackScreenProps<RootStackParamList, 'Screen2'>;

const Screen2 = ({navigation}: Props) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => {navigation.goBack()}}><Text>First Page</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  
});

export default Screen2;