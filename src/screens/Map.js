import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import BottomTab from './../components/BottomTab'

const Tab = createBottomTabNavigator()

const Map = () => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Map</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        height:'90%',
    }
})

export default Map