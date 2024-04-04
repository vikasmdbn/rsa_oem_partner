import {SafeAreaView, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../App';
import CustomerDetails from './CustomerDetails';

type Props = NativeStackScreenProps<RootStackParamList, 'Screen2'>;

const Screen2 = ({route}: Props) => {
  const {title} = route.params;
  return (
    <SafeAreaView>
      <Text>{title}</Text>
      {/* <PriceCalculation vehiclePrice={600} distance={8}/> */}
      <CustomerDetails />
    </SafeAreaView>
  );
};
export default Screen2;
