import React, {useState} from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = (props) => {
    const {
        state,
        navigation
    } = props

    var route = state.index

    const profilIconName = Platform.OS === 'ios' ? "person-circle-outline" : "person-circle-sharp"
    const carteIconName = Platform.OS === 'ios' ? "navigate-circle-outline" : "navigate-circle-sharp"
    const CovoitIconName = Platform.OS === 'ios' ? "car-outline" : "car-sharp"

    return (
        <View style={styles.container}>
            <View style={styles.bubbleMap}>
                <TouchableOpacity
                    key={0}
                    accessibilityRole="button"
                    accessibilityState={route == 0 ? { selected: true } : {}}
                    onPress={() => navigation.navigate("Profile")}
                    style={[styles.mapButton, {paddingRight:20}]}
                    activeOpacity={1}
                >
                    <Icon
                        animated={true}
                        name={profilIconName}
                        size={50}
                        color={route == 0 ? '#cc2936' : '#FFF'}
                    />
                    <Text style={{ color: '#FFF' }}> Profil </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonNav}>
                <TouchableOpacity
                    key={1}
                    accessibilityRole="button"
                    accessibilityState={route == 1 ? { selected: true } : {}}
                    onPress={() => navigation.navigate("Carte")}
                    style={styles.carteButton}
                    activeOpacity={1}
                >
                    <Icon
                        animated={true}
                        name={carteIconName}
                        size={50}
                        color={route == 1 ? '#cc2936' : '#FFF'}
                    />
                    <Text style={{ color: '#FFF' }}> Carte </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bubbleMap}>
                <TouchableOpacity
                    key={2}
                    accessibilityRole="button"
                    accessibilityState={route == 2 ? { selected: true } : {}}
                    onPress={() => navigation.navigate("Covoiturage")}
                    style={[styles.mapButton, {paddingLeft:20}]}
                    activeOpacity={1}
                >
                    <Icon
                        animated={true}
                        name={CovoitIconName}
                        size={50}
                        color={route == 2 ? '#cc2936' : '#FFF'}
                    />
                    <Text style={{ color: '#FFF' }}> Covoiturage </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'green',
        position:'relative',
        height:80
    },
    bubbleMap:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%'
    },
    mapButton:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    buttonNav:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:0,
        width:'100%',
        marginTop:-50,
    },
    carteButton:{
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        height:100,
        width:100
    }
})

export default BottomTab