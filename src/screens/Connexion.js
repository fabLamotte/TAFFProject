import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, Image  } from 'react-native'
import Iconi from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import auth from '@react-native-firebase/auth'
import LinearGradient from 'react-native-linear-gradient'

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

const Connexion = (props) => {
    const {
        initialized,
        setInitialized,
        setUser
    } = props

    const [errorForm, setErrorForm] = useState("")

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

    function onAuthStateChanged(user) {
        setUser(user);
        if (initialized) setInitialized(false);
    }

    const SignIn = (values) => {
        auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
            console.log('Utilisateur connecté !')
        })
        .catch(error => {
            if (error.code === 'auth/wrong-password') {
                setErrorForm('Mot de passe incorrect !')
            }

            if (error.code === 'auth/user-not-found') {
                setErrorForm('Adresse email inconnue !')
            }
        })
    }

    useEffect(() => {
        getData()
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber
    }, [])

    return (
        <LinearGradient colors={['#27ef9f', '#8DC56C']} style={styles.linearGradient}>
            {/* <Image source={require('../assets/compass.png')}/> */}
            
        <View style={styles.container}>
        <Icon name='compass-rose' size={150} color={'white'}/>
            <Text style={styles.text}>Connexion</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => SignIn(values)}
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
                            <Iconi name={iconName} style={styles.icon} size={20} color='black' onPress={() => toggleShow()} />
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
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    logo:{
        
        height:200,
        width:200,

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      text:{
        color:'white',
        fontSize:40,
      },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'white',
        width: '100%',
        paddingHorizontal: 15
    },
    textInput: {
        width: '80%',
    },
    icon: {
        width: '20%',
        textAlign: 'center',
        color:'white',
    },
    button: {
        padding: 20,
        borderRadius: 5,
        marginTop: 10,
        width:'100%',
        borderWidth:5,
        borderColor:'white',
        
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center'
    },
    form:{
        marginVertical:25,
        width:'100%'
    },
    zoneSubmit:{
        width:'100%',
        alignItems:'center',
    }
})

export default Connexion