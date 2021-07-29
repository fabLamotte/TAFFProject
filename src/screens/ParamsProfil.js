import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, Modal, Pressable, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useForm, Controller } from "react-hook-form"
import SimpleImagePicker from './SimpleImagePicker'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const ParamsProfil = ({ route }) => {
  const [data, setData] = useState("")
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(true)
  const [validatingMessage, setValidatingMessage] = useState("")
  const onSubmit = data => ChangeUser(data);
  const userUid = auth().currentUser.uid

  const ChangeUser = (data) => {
    // On affiche la modale
    setModalVisible(true)
    setValidatingMessage("")
    setIsModalLoading(true)

    // Traitement des données dans la base de données
    firestore().collection('users').doc(userUid).update({
      firstname: data.updatedFirstname,
      lastname: data.updatedLastname
    }).then((res) => {
      setIsModalLoading(false)
      setValidatingMessage({
        type: 'success',
        message: 'Vos données ont bien été mises à jour'
      })
      setTimeout(function () {
        setModalVisible(false)
      }, 1000)
    }
    ).catch(() => {
      setIsModalLoading(false)
      setValidatingMessage({
        type: 'error',
        message: 'Une erreur s\'est produite.'
      })
      setTimeout(function () {
        setModalVisible(false)
      }, 1000)
    })
  }

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
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} color='#8DC56C' />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.darkFilter}></View>
          <View style={styles.modalView}>
            {
              isModalLoading ? <ActivityIndicator size="large" color='green' />
                :
                <Text style={{ color: validatingMessage.type == 'success' ? 'green' : 'red', fontSize:15 }}>{validatingMessage.message}</Text>
            }

          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPicker: {
    flex: 5,
  },
  inputContainer: {
    flex: 4,
    alignItems: 'center',
    width: '100%',
    paddingTop: 25,
  },
  input: {
    width: '80%',
    marginBottom: 5
  },
  centeredView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  darkFilter:{
    backgroundColor:'black',
    opacity:0.5,
    position:'absolute',
    height: '100%',
    width: '100%',
    zIndex:1
  },
  modalView:{
    width:'100%',
    height:100,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    zIndex:2
  }
})


export default ParamsProfil