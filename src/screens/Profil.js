import React, {useState, useContext, useEffect} from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Text, Title, Divider, Avatar, List } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { UserContext } from '../contexts/UserContext'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const Profil = ({navigation}) => {
    const [expandedA, setExpandedA] = useState(true);
    const [expandedB, setExpandedB] = useState(true);
    const handlePressA = () => setExpandedA(!expandedA);
    const handlePressB = () => setExpandedB(!expandedB);
    const user = useContext(UserContext)
    const [data, setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    // Recherche en base de donnée firestore de l'utilisateur connecté

    const test = [
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

    const disconnect = () => {
        auth()
        .signOut()
        .then(() => console.log('Utilisateur déconnecté'))
        .catch((error) => console.log(error))
        user.setUser(null)
    }

    useEffect(() => {
        const userUid = auth().currentUser.uid
        const dataUSer = firestore().collection('users').doc(userUid).get()
            .then((doc) => setData(doc.data()))
        setIsLoading(false)
    }, [])

const renderItem =  ({item})  => (
    <View style={{width: '100%'}}>
        <View style={{flexDirection: 'row' }}>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}} >
                <Avatar.Image  size={70} source={require(`../assets/imgDefault.jpg`)} />
            </View>
            <View style={{flex: 4, paddingLeft: 5}}>
                <Title>{item.name}</Title>
                <Text>{item.address}</Text>
                <Text style={styles.partaker}>{item.partaker} participants</Text>
                {!item.going ? <Text style={styles.going}>J'ai changé d'avis, je n'irai pas a cet evenement</Text> : null}
            </View>
            <View
                style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Icon size={40} name='car'
                    color={ item.carPooling ? '#6D9953' : '#C4585B'}
                />
            </View>
        </View>
    <Divider style={{marginTop: 5, marginBottom: 5}} />
    </View>
    )


    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.avatar}>
                    <Avatar.Icon size={60} icon='account' color='#8DC56C' style={{backgroundColor: '#fff'}}/>
                </View>
                <View style={styles.name}>
                    <Title style={{fontSize: 30}}>{data.firstname}</Title>
                    <Title style={{fontSize: 30}}>{data.lastname}</Title>
                </View >
                <TouchableOpacity style={styles.icon}
                onPress={() => navigation.navigate('ParamsProfil')}>
                    <Icon size={35} name='cog'/>
                </TouchableOpacity>
            </View>
            {/* Boutton de déconnexion */}
            <View style={styles.disconnectView}>
                <TouchableOpacity style={styles.buttonDisconnect} onPress={() => disconnect()}>
                    <Text style={styles.buttonDisconnectText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
            <List.Section style={{width: '100%'}}>
                <List.Accordion style={styles.accordion}
                    title="Mes Prochaines visites"
                    titleStyle={{color: '#fff', fontSize: 20}}
                    expanded={expandedA}
                    onPress={handlePressA}>
                    <List.Item
                        style={{backgroundColor: "#6D9953", height: 30, 
                            paddingTop: 0, paddingBottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                        titleStyle={{color: '#fff', fontSize: 14, textAlign: 'center', height: 20  }}
                        title="Voir toute la liste"
                        onPress={() => console.log("from listItem 1")} 
                        />
                    <FlatList 
                    data={test}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{flexgrow:0, height: 275}}/>
                </List.Accordion>
                </List.Section>
                <List.Section style={{width: '100%'}}>
                    <List.Accordion style={styles.accordion}
                        title="Mes anciennes visites"
                        titleStyle={{color: '#fff', fontSize: 20}}
                        expanded={expandedB}
                        onPress={handlePressB}>
                        <List.Item
                            style={{backgroundColor: "#6D9953", height: 30, 
                                paddingTop: 0, paddingBottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                            titleStyle={{color: '#fff', fontSize: 14, textAlign: 'center', height: 20  }}
                            title="Voir toute la liste"
                            onPress={() => console.log("from listItem 1")} 
                            />
                    
                        <FlatList 
                        data={test}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        style={{flexgrow:0, height: 300}}/>

                    </List.Accordion>
                </List.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTop: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        backgroundColor: '#8DC56C',
    },
    avatar: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    icon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    accordion: {
        backgroundColor: '#8DC56C',
    },
    partaker: {
        backgroundColor: '#80ABC4',
        borderRadius: 5,
        paddingLeft: 5

    },
    going: {
        backgroundColor: '#C4585B',
        borderRadius: 5,
        paddingLeft: 5,
        marginTop: 5
    },
    disconnectView:{
        width:'100%'
    },
    buttonDisconnect:{
        backgroundColor:'red',
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonDisconnectText:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    }
})

export default Profil