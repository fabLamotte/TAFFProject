import React from 'react'

import Profil from './src/screens/Profil'
import Map from './src/screens/Map'
import Covoiturage from './src/screens/Covoiturage'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={Profil} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Covoiturage" component={Covoiturage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
