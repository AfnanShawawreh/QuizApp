import React, { useEffect, useState } from "react";
import { Formik as Formik } from 'formik'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  BackHandler,
} from 'react-native'
import RadioButton from '../Component/RadioButton';
import Card from '../Component/Card'
import * as yup from 'yup'
import {createAnswer}from '../function/index'
const Quiz = ({navigation}) => {
  const data = [
    { value: 'Java' },
    { value: 'Javascript' },
    { value: 'Dart' },
  ];
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);
  const formValidationSchema = yup.object().shape({
    value: yup
      .string()
      .required('value  is Required'),
    name: yup
      .string()
      .min(3, ({ min }) => `name must be at least ${min} characters`)
      .required('name is required'),
  })
  // const onSubmitHandler =async(value)=>{
  //   const result = await createAnswer(value)
   

  // }
  return (

    <View style={styles.Card}>
      <Card>
        <Text style={styles.title1}>Quiz</Text>
        <Formik
          validationSchema={formValidationSchema}
          initialValues={{ value: '', name: '' }}
          onSubmit={async(values) =>{
           const result = await createAnswer(values);
          navigation.pop()
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                name="Name"
                placeholder="Enter your name"
                style={styles.textInput}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}

              />
              {(errors.name && touched.name) &&
                <Text style={styles.errorText}>{errors.name}</Text>
              }

              <Text style={styles.title}>Choose your favorite language</Text>
              <RadioButton data={data} onValueChange={handleChange("value")
              } />
              {(errors.value && touched.value) &&
                <Text style={styles.errorText}>{errors.value}</Text>
              }
              <TouchableHighlight onPress={handleSubmit} disabled={!isValid} style={styles.highlight}>
                <Text style={styles.Text}>Submit</Text>
              </TouchableHighlight>
            </>
          )}
        </Formik>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
 title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#FF9AAE',
    marginVertical: 2,
    alignSelf: 'center',

  },
  title1: {

    fontSize: 60,
    fontWeight: '700',
    color: '#FF9AAE',
    alignSelf: 'center',
  },
  Card: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
   
    backgroundColor:'#FFEAEA'
  },
  Text: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center', alignSelf: 'center'
  },
  textInput: {
    height: 40,
    width: '80%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: '#FF9AAE',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  highlight: {
    margin: 6,
    padding: 10,
    borderWidth: 3,
    width: '20%',
    backgroundColor: 'white',
    borderColor: '#FF9AAE',
    marginTop: '5%'
  }


})


export default Quiz;
