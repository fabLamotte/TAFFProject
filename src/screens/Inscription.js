import React, { useState, useContext } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'

import { Formik } from 'formik'
import * as yup from 'yup'
import Icon from 'react-native-vector-icons/Ionicons'

import { AuthContext } from './../context/AuthContext'

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
    const iconName =
        hidePassword ?
            Platform.OS === 'ios' ? "eye-outline" : "eye-sharp"
            :
            Platform.OS === 'ios' ? "eye-off-outline" : "eye-off-sharp"

    const toggleShow = () => {
        hidePassword ? setHidePassword(false) : setHidePassword(true)
    }

    const { signUp } = useContext(AuthContext)

    function registerUser(data) {
        signUp(data)
    }

    return (
        <View style={styles.container}>
            <Text>Inscription</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '', repeatedPassword: '' }}
                onSubmit={values => registerUser(values)}
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
                                secureTextEntry
                            />
                            <Icon name={iconName} style={styles.icon} size={20} color='black' onPress={() => toggleShow()} />
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

export default Inscriptions