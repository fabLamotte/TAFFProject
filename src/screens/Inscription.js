import React, { useState, useContext } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Avatar } from 'react-native-paper';


import { Formik } from 'formik'
import * as yup from 'yup'
import Iconi from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    repeatedPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
})

const Inscriptions = () => {

    const [hidePassword, setHidePassword] = useState(true)
    const [hideRepeatedPassword, setRepeatedPassword] = useState(true)
    const iconName =
        hidePassword ?
            Platform.OS === 'ios' ? "eye-outline" : "eye-sharp"
            :
            Platform.OS === 'ios' ? "eye-off-outline" : "eye-off-sharp"

    const toggleShow = () => {
        hidePassword ? setHidePassword(false) : setHidePassword(true)
    }

    const AddUser = async (values) => {
        // Ajout de l'utilisateur dans l'application
        const user = auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((response) => {
                // Ajout du document de l'utilisateur dans la collection user
                firestore().collection('users').doc(auth().currentUser.uid).set({
                    email: response.user.email,
                    firstname: values.firstname,
                    lastname:values.lastname
                })
                    .then(() => {
                    })
                    .catch((error) => {
                        console.error("Erreur lors de l'enregistrement de la tâche: ", error);
                    })
            })
            .catch(error => {
                console.log(error)
                if (error.code === 'auth/email-already-in-use') {
                    setErrorForm('Adressse mail déjà utilisée')
                }
                if (error.code === 'auth/invalid-email') {
                    setErrorForm('Adresse mail invalide')
                }
            })
    }

    return (
        <LinearGradient colors={['#27ef9f', '#8DC56C']} style={styles.linearGradient}>
        <View style={styles.container}>
        <Icon name='compass-rose' size={150} color={'white'}/>

            <Text style={styles.text}>Inscription:</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '', repeatedPassword: '', firstname:'', lastname:'' }}
                onSubmit={values => AddUser(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        
                        <View style={styles.input}>
                            <TextInput
                                name="email"
                                placeholder="Email Address"
                                style={styles.textInput}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                        </View>
                        {errors.email && (
                            <View>
                                <Text>{errors.email?.message}</Text>
                            </View>
                        )}
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', width:'100%'}}>
                            <View style={[styles.input, {width:'50%'}]}>
                                <TextInput
                                    name="firstname"
                                    placeholder="Prénom"
                                    style={styles.textInput}
                                    onChangeText={handleChange('firstname')}
                                    onBlur={handleBlur('firstname')}
                                    value={values.firstname}
                                    keyboardType="default"
                                />
                            </View>
                            <View style={[styles.input, {width:'50%'}]}>
                                <TextInput
                                    name="lastname"
                                    placeholder="Nom"
                                    style={styles.textInput}
                                    onChangeText={handleChange('lastname')}
                                    onBlur={handleBlur('lastname')}
                                    value={values.lastname}
                                    keyboardType="default"
                                />
                            </View>
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
                        {errors.password && (
                            <View>
                                <Text>{errors.password?.message}</Text>
                            </View>
                        )}
                        <View style={styles.input}>
                            <TextInput
                                name="repeatedPassword"
                                placeholder="Repeat password"
                                style={styles.textInput}
                                onChangeText={handleChange('repeatedPassword')}
                                onBlur={handleBlur('repeatedPassword')}
                                value={values.repeatedPassword}
                                secureTextEntry={hideRepeatedPassword}
                            />
                            <Iconi name={iconName} style={styles.icon} size={20} color='black' onPress={() => toggleShow()} />
                        </View>
                        {errors.repeatedPassword && (
                            <View>
                                <Text>{errors.repeatedPassword?.message}</Text>
                            </View>
                        )}
                        <View style={styles.zoneSubmit}>
                            <TouchableOpacity onPress={handleSubmit} title="Submit" style={styles.button}>
                                <Text style={styles.textButton}>S'inscrire</Text>
                            </TouchableOpacity>
                        </View>
                    </>
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
        padding: 20,
    },
    text:{
        color:'white',
        fontSize:40,
    },
 
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'white',
        color:'white',
        width: '100%',
        paddingHorizontal: 15,
        marginVertical:2
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
        textAlign: 'center'
    },
    form: {
        marginVertical: 25,
        width: '100%',
    },
    zoneSubmit: {
        width: '100%',
        alignItems: 'center',
    }
})

export default Inscriptions