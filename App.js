import React from 'react'
import { StyleSheet } from 'react-native'

import Profil from './src/screens/Profil'
import ParamsProfil from './src/screens/ParamsProfil'
import Map from './src/screens/Map'
import Covoiturage from './src/screens/Covoiturage'
import BottomTab from './src/components/BottomTab'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();


export  const ProfilStackNav = () => {
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


const App = () => {

  return (
    
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Carte'
          tabBar={(props, index) => <BottomTab key={index} {...props} />} 
        >
            <Tab.Screen name="Profile">
              {() => <ProfilStackNav />}
            </Tab.Screen>
            <Tab.Screen name="Carte">
              {() => <Map />}
            </Tab.Screen>
            <Tab.Screen name="Covoiturage">
              {() => <Covoiturage />}
            </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App
