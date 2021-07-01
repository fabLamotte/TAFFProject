import React from 'react'
import {StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native'
import { useForm, Controller } from "react-hook-form";

const ParamsProfil = ({route}) => {

const ParamsProfil = route.params
console.log(ParamsProfil)

const { control, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={ParamsProfil.firstname}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={ParamsProfil.lastname}
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 50
  }
})


export default ParamsProfil