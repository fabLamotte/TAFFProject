import React from 'react'
import { View, StyleSheet, FlatList,  } from 'react-native'
import { Text, TextInput, Title, Divider, Avatar, List } from 'react-native-paper'
import CovoiturageData from '../constant/covoiturageData'
import CovoiturageItem from '../components/CovoiturageItem'


const Covoiturage = ({}) => {

    const CovoiturageData = [
        {
        id: 0,
        name: 'Musee du Louvre',
        date: 'date',
        address: 'rue de Rivoli, 75001 Paris',
        partaker: 16,
        img: 'imgDefault.jpg',
        going: false,
        carPooling: true,
        },
        {
        id: 1,
        name: 'Parc Asterix',
        date: 'date',
        address: '60128 Plailly',
        partaker: 24,
        img: 'imgDefault.jpg',
        going: true,
        carPooling: false,
        },
        {
        id: 2,
        name: 'Musee du Louvre',
        date: 'date',
        address: 'rue de Rivoli, 75001 Paris',
        partaker: 16,
        img: 'imgDefault.jpg',
        going: false,
        carPooling: true,
        },
        {
        id: 3,
        name: 'Parc Asterix',
        date: 'date',
        address: '60128 Plailly',
        partaker: 24,
        img: 'imgDefault.jpg',
        going: true,
        carPooling: false,
        },
        {
        id: 4,
        name: 'Musee du Louvre',
        date: 'date',
        address: 'rue de Rivoli, 75001 Paris',
        partaker: 16,
        img: 'imgDefault.jpg',
        going: false,
        carPooling: true,
        },
        {
        id: 5,
        name: 'Parc Asterix',
        date: 'date',
        address: '60128 Plailly',
        partaker: 24,
        img: 'imgDefault.jpg',
        going: true,
        carPooling: false,
        },
        {
        id: 6,
        name: 'Musee du Louvre',
        date: 'date',
        address: 'rue de Rivoli, 75001 Paris',
        partaker: 16,
        img: 'imgDefault.jpg',
        going: false,
        carPooling: true,
        },
        {
        id: 7,
        name: 'Parc Asterix',
        date: 'date',
        address: '60128 Plailly',
        partaker: 24,
        img: 'imgDefault.jpg',
        going: true,
        carPooling: false,
        },
        {
        id: 8,
        name: 'Musee du Louvre',
        date: 'date',
        address: 'rue de Rivoli, 75001 Paris',
        partaker: 16,
        img: 'imgDefault.jpg',
        going: false,
        carPooling: true,
        },
        {
        id: 9,
        name: 'Parc Asterix',
        date: 'date',
        address: '60128 Plailly',
        partaker: 24,
        img: 'imgDefault.jpg',
        going: true,
        carPooling: false,
        },
        {
        id: 10,
        name: 'Musee du Louvre',
        date: 'date',
        address: 'rue de Rivoli, 75001 Paris',
        partaker: 16,
        img: 'imgDefault.jpg',
        going: false,
        carPooling: true,
        },
        {
        id: 11,
        name: 'Parc Asterix',
        date: 'date',
        address: '60128 Plailly',
        partaker: 24,
        img: 'imgDefault.jpg',
        going: true,
        carPooling: false,
        }
    ]
    
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Proxi Tourista.</Text>
            </View>
            <View>
            <Text style={styles.H1}>Covoiturage</Text>
            </View>

            <View style={styles.containerList}>
            <List.Section>
                <List.Accordion style={styles.accordion} title='Départ'>
                    <List.Item />
                    <TextInput 
                    label="Je part de"
                    />
                    

                    
                </List.Accordion>
            </List.Section>

            <List.Section>
                <List.Accordion style={styles.accordion} title='Arrivée'>
                    <List.Item />
                    <TextInput 
                    label="Je vais à"
                    />
                    <FlatList
                    data={CovoiturageData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <CovoiturageItem item={item}/> }
                    style={styles.flatList}
                    />

                    
                </List.Accordion>
            </List.Section>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
        
    },
    header:{
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#8DC56C',
        width:'100%',
        height:50,
    },
    textHeader:{
        fontSize:30,
        color:'white',
        
    },
    containerList:{
        width:'100%',
    },
    accordion:{
        backgroundColor:'#8DC56C',
    },
    H1:{
        fontSize:20,
    },
    flatList:{
        height:275,
    }
})

export default Covoiturage