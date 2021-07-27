import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Formik } from 'formik'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})

const Connexion = () => {

    const [hidePassword, setHidePassword] = useState(true)
    const iconName =
        hidePassword ?
            Platform.OS === 'ios' ? "eye-outline" : "eye-sharp"
            :
            Platform.OS === 'ios' ? "eye-off-outline" : "eye-off-sharp"

    const toggleShow = () => {
        hidePassword ? setHidePassword(false) : setHidePassword(true)
    }

    // Fonction récupération données de AsyncStorage
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user')
          const parsedValue = JSON.parse(jsonValue)
          if(parsedValue){
            setValue('email' , parsedValue.email)
            setValue('password' , parsedValue.password)
          }
        } catch(e) {
          // error reading value
        }
    }

    useEffect(() => {
        getData()
    })

    return (
        <View style={styles.container}>
            <Text>Connexion</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => onSignIn(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.form}>
                        <View style={styles.input}>
                            <TextInput
                                name="email"
                                placeholder="Email Address"
                                style={styles.textInput, {width:'100%'}}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                name="password"
                                placeholder="Password"
                                style={styles.textInput}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                            />
                            <Icon name={iconName} style={styles.icon} size={20} color='black' onPress={() => toggleShow()} />
                        </View>
                        <View style={styles.zoneSubmit}>
                            <TouchableOpacity onPress={handleSubmit} title="Submit" style={styles.button}>
                                <Text style={styles.textButton}>Se connecter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        paddingHorizontal: 15
    },
    textInput: {
        width: '80%',
    },
    icon: {
        width: '20%',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
        marginTop: 10,
        width:200
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center'
    },
    form:{
        marginVertical:20,
        width:'100%'
    },
    zoneSubmit:{
        width:'100%',
        alignItems:'center',
    }
})

export default Connexion