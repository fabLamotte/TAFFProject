import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Map from './../screens/Map'
import Covoiturage from './../screens/Covoiturage'
import BottomTab from './../components/BottomTab'
import ProfilStackNav from './../navigation/ProfilStackNav'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Carte'
        tabBar={(props, index) => 
          <BottomTab key={index} {...props} />
        }
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
  container: {
    flex: 1
  }
})

export default AppNavigation