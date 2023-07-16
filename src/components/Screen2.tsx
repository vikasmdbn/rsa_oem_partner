import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewProps,
    View
  } from 'react-native';
  import type { NativeStackScreenProps } from '@react-navigation/native-stack';
  import type {RootStackParamList} from '../../App'
  import CustomerDetails from './CustomerDetails';

  type Props = NativeStackScreenProps<RootStackParamList, 'Screen2'>;

const Screen2 = ({navigation}: Props) => {
    return (
        <SafeAreaView>
            {/* <PriceCalculation vehiclePrice={600} distance={8}/> */}
            <CustomerDetails />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  
});

export default Screen2;