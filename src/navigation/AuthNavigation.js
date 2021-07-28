import React from 'react'

import Connexion from './../screens/Connexion'
import Inscription from './../screens/Inscription'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const AuthNavigation = (props) => {
    const {
        initialized,
        setInitialized,
        user,
        setUser
    } = props

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Connexion">
                <Tab.Screen name="Connexion">
                    {() => <Connexion 
                    initialized={initialized} 
                    setInitialized={setInitialized} 
                    user={user} 
                    setUser={setUser}   
                />}
                </Tab.Screen>
                <Tab.Screen name="Inscription">
                    {() => <Inscription />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation