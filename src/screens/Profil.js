import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Title, Divider } from 'react-native-paper'

const Profil = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Title>Profile</Title>
                <View style={styles.textHolder}>
                    <Text>Nom:</Text>
                    <Text>Prenom:</Text>
                    <Text>Date de naissance:</Text>
                    <Text>Covoiturage:</Text>
                </View>
            </View>
            <Divider />
            <View style={styles.subContainer}>
                <Title>Visite</Title>
                <View style={styles.textHolder}>
                    <Text>Nom:</Text>
                    <Text>Lieu:</Text>
                    <Text>Date:</Text>
                    <Text>Visiteurs:</Text>
                </View>
            </View>
            <Divider />
            <View style={styles.subContainer}>
                <Title>Historique des visites</Title>
                <View style={styles.textHolder}>
                    <Text>Nom:</Text>
                    <Text>Lieu:</Text>
                    <Text>Date:</Text>
                    <Text>Visiteurs:</Text>
                </View>
            </View>
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        width: '70%',
        paddingTop: 15
    },
    textHolder: {
        height: 150,
        paddingLeft: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#DCDCDC'
    }
})

export default Profil