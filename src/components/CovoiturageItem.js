import { data } from 'browserslist'
import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import { Text, TextInput, Title, Divider, Avatar, List } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const CovoiturageItem = ({item}) => {
    return(

        <View style={styles.container}>
        <View style={styles.mainContainer}>
            <View style={styles.imageAvatar}>
            <Avatar.Image  size={90} source={require(`../assets/imgDefault.jpg`)} />
            </View>

            <View style={styles.textCovoiturage}>
            <Text style={styles.title}>{item.name}</Text> 
            <Text>{item.address}</Text>
            <Text style={styles.partaker}>{item.partaker}participants</Text>
            
            {!item.going ? <Text style={styles.going}>J'ai changé d'avis, je n'irai pas a cet evenement</Text> : null}

            </View>
            <View
                style={styles.iconsCar}>
                <Icon size={40} name='car'
                    color={ item.carPooling ? '#6D9953' : '#C4585B'}
                     />
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    mainContainer: {
      height:100,
      flexDirection:'row',
    
    },
    imageAvatar:{
        flex:2,
        paddingVertical:10,
        alignContent:'center',
        alignItems:'center',
    },
    textCovoiturage:{
        flex:4,
        paddingLeft:5,
    },
    title:{
        fontSize:20,
    },
    partaker: {
        backgroundColor: '#80ABC4',
        borderRadius: 5,
        paddingLeft: 5,

    },
    going: {
        backgroundColor: '#C4585B',
        borderRadius: 5,
        paddingLeft: 5,
        marginTop: 5
    },
    iconsCar:{
        flex: 2, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
})

export default CovoiturageItem