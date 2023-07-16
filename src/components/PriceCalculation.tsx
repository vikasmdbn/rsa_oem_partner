import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useFormikContext} from 'formik';
import Screen from './Screen';
import * as Yup from 'yup';

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../components/forms';

import AppText from './AppText';

type PriceCalculationProps = {
  vehiclePrice: number;
  distance: number;
};

function FinalPriceText({vehiclePrice}: any) {
  const {values} = useFormikContext();

  const totalPrice =
    values && values.commission
      ? Number(values.commission) + Number(vehiclePrice)
      : Number(vehiclePrice);

  console.log('values', values);
  return (
    <View>
      <AppText style={{fontWeight: 'bold', margin: 8, color: '#000'}}>
        Your commission : {Number(values.commission)} Rs
      </AppText>

      <AppText style={{fontWeight: 'bold', margin: 8, color: '#000'}}>
        Total price : {totalPrice} Rs
      </AppText>
    </View>
  );
}

const validationSchema = Yup.object().shape({
  vehiclePrice: Yup.number()
    .required()
    .min(1)
    .max(100000)
    .label('Vehicle Price'),
  commission: Yup.number().required().min(0).max(100000).label('commission'),
});

export const PriceCalculation = ({
  vehiclePrice = 0,
  distance,
}: PriceCalculationProps) => {
  console.log('vehicle price', vehiclePrice);

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          commission: '0',
        }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}>
        <AppText style={{fontWeight: 'bold', margin: 8}}>
          Price calculation
        </AppText>

        <AppText style={{margin: 8, color: '#000'}}>
          Distance : <AppText style={{fontWeight: 'bold'}}>{distance}</AppText>{' '}
          kms
        </AppText>

        <AppText style={{fontWeight: 'bold', margin: 8, color: '#000'}}>
          Vendor price : {vehiclePrice} Rs
        </AppText>

        <FinalPriceText vehiclePrice={vehiclePrice} />

        <FormField
          keyboardType="numeric"
          maxLength={6}
          name="commission"
          placeholder="Enter commission"
        />

        <SubmitButton title="Confirm" />
      </Form>
    </Screen>
  );
};

export default PriceCalculation;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    padding: 10,
    // height: '100%'
  },
});
