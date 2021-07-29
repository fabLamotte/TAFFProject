import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Button,  } from 'react-native'
import { Text, TextInput, Title, Divider, Avatar, List } from 'react-native-paper'
import CovoiturageData from '../constant/covoiturageData'
import CovoiturageItem from '../components/CovoiturageItem'
import { Assets } from '@react-navigation/stack'


const Covoiturage = ({}) => {

    const CovoiturageArrive = [
        {
        id: 0,
        name: 'Musee du Louvre',
        date: 'date',
        address: 'rue de Rivoli, 75001 Paris',
        partaker: 16,
        img: require('../assets/imgDefault.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id: 1,
        name: 'Parc Asterix',
        date: 'date',
        address: '60128 Plailly',
        partaker: 24,
        img: require('../assets/asterix.jpg'),
        going: true,
        carPooling: false,
        },
        {
        id: 2,
        name: 'Cathédrale Amiens',
        date: 'date',
        address: '30 Place Notre Dame, 80000 Amiens',
        partaker: 16,
        img: require('../assets/cathedrale.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id: 3,
        name: 'Hortillonnages',
        date: 'date',
        address: '54 Bd de Beauvillé, 80000 Amiens',
        partaker: 24,
        img: require('../assets/hortillonnage.jpg'),
        going: true,
        carPooling: false,
        },
        {
        id: 4,
        name: 'musée jules verne',
        date: 'date',
        address: '2 Rue Charles Dubois, 80000 Amiens',
        partaker: 16,
        img: require('../assets/maison.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id: 5,
        name: 'spectacle Chroma',
        date: 'date',
        address: '30 Place Notre Dame, 80000 Amiens',
        partaker: 24,
        img: require('../assets/chroma.jpg'),
        going: true,
        carPooling: false,
        },
        {
        id: 6,
        name: 'Musee de picardie',
        date: 'date',
        address: '2 Rue Puvis de Chavannes, 80000 Amiens',
        partaker: 16,
        img: require('../assets/musée.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id: 7,
        name: 'Beffroi',
        date: 'date',
        address: '1 Place Maurice Vast, 80000 Amiens',
        partaker: 24,
        img: require('../assets/beffroi.jpg'),
        going: true,
        carPooling: false,
        },
        {
        id: 8,
        name: 'quartier saint leu',
        date: 'date',
        address: '80000',
        partaker: 16,
        img: require('../assets/saint-leu.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id: 9,
        name: 'comédie de picardie',
        date: 'date',
        address: ' 62 Rue des Jacobins, 80000 Amiens',
        partaker: 24,
        img: require('../assets/comédie.jpg'),
        going: true,
        carPooling: false,
        },
        {
        id: 10,
        name: 'Zoo d amiens',
        date: 'date',
        address: 'All. du Zoo, 80000 Amiens',
        partaker: 16,
        img: require('../assets/zoo.jpg'),
        going: false,
        carPooling: true,
        }
    ];

    const CovoiturageDepart = [
        {
        id:0,
        name:'Benard',
        date:'date',
        address:'5 place rené coty, 80000 Amiens',
        partaker:5,
        img: require('../assets/bernard.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id:1,
        name:'Jacky',
        date:'date',
        address:'5 place rené coty, 80000 Amiens',
        partaker:5,
        img: require('../assets/jacky.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id:2,
        name:'René',
        date:'date',
        address:'5 place rené coty, 80000 Amiens',
        partaker:5,
        img: require('../assets/rené.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id:3,
        name:'Jean-claude',
        date:'date',
        address:'5 place rené coty, 80000 Amiens',
        partaker:2,
        img: require('../assets/jcvd.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id:4,
        name:'hubert',
        date:'date',
        address:'5 place rené coty, 80000 Amiens',
        partaker:5,
        img: require('../assets/hubert.jpg'),
        going: false,
        carPooling: true,
        },
        {
        id:5,
        name:'Bill',
        date:'date',
        address:'5 place rené coty, 80000 Amiens',
        partaker:5,
        img: require('../assets/bill.jpg'),
        going: false,
        carPooling: true,
        },
    ];

    // const [searchedText, setSearchedText] = useState(null);

    // const loadCovoiturage = (text) => {
    //     if (searchedText !=null) {
    //         if ( searchedText(text) === CovoiturageDepart.name){
    //             console.log(item)
    //         };
    //     }
    // }

    // const searchTextInputChanged = (text) => {
    //     setSearchedText(text) 
    //   }
    
    
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
                    <TextInput 
                    label="Je part de"
                    onChangeText={(text) =>{searchTextInputChanged(text),loadCovoiturage(text) }}
                    />

                    <FlatList
                    data={CovoiturageDepart}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <CovoiturageItem item={item}/> }
                    style={styles.flatList}
                    />

                    
                </List.Accordion>
            </List.Section>

            <List.Section>
                <List.Accordion style={styles.accordion} title='Arrivée'>
                    <TextInput 
                    label="Je vais à"
                    />
                    <FlatList
                    data={CovoiturageArrive}
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
        height:270,
    }
})

export default Covoiturage