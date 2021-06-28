import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const BottomTab = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.buttonNav} onPress={() => navigation.navigate('Profil') }>
                    <Icon name="user" style={styles.menuIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonNav} onPress={() => navigation.navigate('Covoiturage')}>
                    <Icon name="car" style={styles.menuIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.bubbleMap}>
                <TouchableOpacity style={styles.mapButton} onPress={() => navigation.navigate('Map')}>
                    <Icon name="map-marker" style={styles.menuIcon} />
                </TouchableOpacity>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'10%',
        width:'100%',
        backgroundColor:'#8DC56C',
        justifyContent:'center',
        borderTopWidth:2,
        borderTopColor:'white'
    }, 
    bar:{
        flexDirection:'row',
        alignItems:'center',
    },
    buttonNav:{
        width:'50%'
    },
    bubbleMap:{
        position:'absolute',
        alignItems:'center',
        width:'100%'
    },
    mapButton:{
        height:100,
        width:100,
        backgroundColor:'#8DC56C',
        marginBottom:70,
        justifyContent:'center',
        borderRadius:100,
        borderWidth:2,
        borderColor:'white',
    },
    menuIcon:{
        fontSize:45,
        textAlign:'center',
        color:'white'
    },
})

export default BottomTab