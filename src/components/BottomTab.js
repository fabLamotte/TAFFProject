import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'

const BottomTab = (props) => {
    const {
        state,
        descriptors,
        navigation
    } = props

    var route = state.index

    const iconProfile = Platform.OS === 'ios' ? "person-circle-outline" : "person-circle-sharp"
    const iconCarte = Platform.OS === 'ios' ? "navigate-circle-outline" : "navigate-circle-sharp"
    const iconCovoit = Platform.OS === 'ios' ? "car-sport-outline" : "car-sport-sharp"

    return (
        <View style={styles.container}>
            <View style={styles.bubbleMap}>
                <TouchableOpacity
                activeOpacity={1}
                key={0}
                onPress={() => navigation.navigate('Profile')}
                style={[styles.mapButton, {paddingRight:20}]}>
                    <Icon
                        name={iconProfile}
                        size={50}
                        color={route === 0 ? '#cc2936' : '#FFF'}
                    />
                    <Text style={{ color: '#FFF' }}> Profil </Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.buttonNav]}>
                <TouchableOpacity
                activeOpacity={1}
                key={1}
                onPress={() => navigation.navigate('Carte')}
                style={[styles.map]}>
                    <Icon
                        size={50}
                        name={iconCarte}
                        color={route === 1 ? '#cc2936' : '#FFF'}
                    />
                    <Text style={{ color: '#FFF' }}> Carte </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bubbleMap}>
                <TouchableOpacity
                activeOpacity={1}
                key={2}
                onPress={() => navigation.navigate('Covoiturage')}
                style={[styles.mapButton, {paddingLeft:20}]}>
                    <Icon
                        name={iconCovoit}
                        size={50}
                        color={route === 2 ? '#cc2936' : '#FFF'}
                    />
                    <Text style={{ color: '#FFF' }}> Covoiturage </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        backgroundColor:'green',
    },
    bubbleMap:{
        justifyContent:'space-around',
        alignItems:'center',
        width:'50%'
    },
    buttonNav:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        left:0,
    },
    mapButton:{
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
    },
    map:{
        marginTop:-50,
        height:100,
        width:100,
        borderRadius:50,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    }
})

export default BottomTab