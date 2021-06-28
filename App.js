import React from 'react'
import { StyleSheet } from 'react-native'

import Profil from './src/screens/Profil'
import Map from './src/screens/Map'
import Covoiturage from './src/screens/Covoiturage'
import BottomTab from './src/components/BottomTab'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        tabBar={(props, index) => <BottomTab key={index} {...props} />} 
      >
          <Tab.Screen name="Profil">
            {() => <Profil />}
          </Tab.Screen>
          <Tab.Screen name="Map">
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
