
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Profil from './../screens/Profil'
import ParamsProfil from './../screens/ParamsProfil'

const Stack = createStackNavigator()

const ProfilStackNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          options={{headerShown: false}}
          name="Profil"
          title="Profil"
          component={Profil} />
        <Stack.Screen
          options={{headerTitle: "Paramètres de profil"}}
          name="ParamsProfil"
          title="ParamsProfil"
          component={ParamsProfil} />
  
      </Stack.Navigator>
    )
}

export default ProfilStackNav