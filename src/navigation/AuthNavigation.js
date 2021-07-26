import React from 'react'

import Connexion from './../screens/Connexion'
import Inscription from './../screens/Inscription'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Connexion">
                <Tab.Screen name="Connexion" component={Connexion} />
                <Tab.Screen name="Inscription" component={Inscription} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation