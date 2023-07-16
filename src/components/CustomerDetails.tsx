
import React , {useState} from 'react';
import { StyleSheet ,TextInput,View} from "react-native";
import { useFormikContext } from "formik";

import Screen from './Screen';
import * as Yup from "yup";

import AppText from './AppText';

import { AppForm as Form ,AppFormField as FormField, SubmitButton} from '../components/forms';


const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter customer name').min(3).max(255),
    phoneNumber: Yup.string().required('Please enter customer phone number').matches(/\A\d{10}\z/),
})

const  CustomerDetails = () => {
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{
                    firstName: "",
                    phoneNumber: ""
                }}
                onSubmit={(values: any) => console.log(values)}
                validationSchema={validationSchema}>

                    <AppText style={{fontWeight: 'bold',margin: 8}}>Enter customer details</AppText>

                    <FormField maxLength={255} name="firstName" placeholder="Enter customer name" />

                    <FormField
                        keyboardType="numeric"
                        maxLength={10}
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        />

                    <SubmitButton title="Confirm" />


                </Form>
        </Screen>
    )
}

export default CustomerDetails;

const styles= StyleSheet.create({
    container: {
        padding: 10,
    }
})