import React from 'react'
import {StyleSheet, View, Text, Button, Alert} from 'react-native'
import {TextInput} from 'react-native-paper'
import { useForm, Controller } from "react-hook-form";
import SimpleImagePicker from './SimpleImagePicker'


const ParamsProfil = ({route}) => {

const {avatar, firstname, lastname} = route.params.profilTest


const { control, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);





  return (
    <View style={styles.container}>
      <View style={styles.imgPicker}>
      <SimpleImagePicker />
      </View>
      <View style={styles.inputContainer}>
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
        name='updatedFirstname'
        defaultValue={firstname}
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
        name='updatedLastname'
        defaultValue={lastname}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} color='#8DC56C' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPicker: {
    flex:5,
  },
  inputContainer: {
    flex:4,
    alignItems: 'center',
    width: '100%',
    paddingTop: 25,
  },
  input: {
    width: '80%',
    marginBottom: 5
  }
})


export default ParamsProfil