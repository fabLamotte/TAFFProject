import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

const ParamsProfil = ({route}) => {

const ParamsProfil = route.params
console.log(ParamsProfil)

  return (
    <View style={styles.container}>
      <Text>Params</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default ParamsProfil