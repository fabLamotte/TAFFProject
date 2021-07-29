import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import Geolocation from 'react-native-geolocation-service'


MapboxGL.setAccessToken('sk.eyJ1IjoidGhpYmF1bHQtaGJzZGV2IiwiYSI6ImNrcWhybWd0bzBlbm8yb254ZmJycnViczEifQ.s-13ZSWVt4vrl00hZizGaw')
MapboxGL.setTelemetryEnabled(false)



const Map = () => {

    const [latData, setLatData] = useState('');
    const [lonData, setLonData] = useState('');
    const [monumentsList, setMonumentsList] = useState([]);
    Geolocation.getCurrentPosition(info => setLatData(info.coords.latitude));
    Geolocation.getCurrentPosition(info => setLonData(info.coords.longitude));
    const OTMKey = '5ae2e3f221c38a28845f05b6390cafb357904aa8ea031eb0e9fe5193'
    const openTripMapQuery = 'https://api.opentripmap.com/0.1/en/places/radius?radius=49460000&lon='+lonData+'&lat='+latData+'&apikey='+OTMKey;
    const [data, setData] = useState([]);

    const getMonumentsFromOTM = async () => {
        return await fetch(openTripMapQuery)
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson.features)
            setMonumentsList(data.map((monument => monument)));
            console.log(monumentsList)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
    getMonumentsFromOTM()
} ,[])




// const MapAnnotation = () => {
//     return (
//         <MapboxGL.PointAnnotation
//         coordinate={[2.301199, 49.890472]}>
//             <View style={styles.annotationContainer}>
//                 <View style={styles.annotation} />
//             </View>
//             <MapboxGL.Callout title='Annotation' />
//         </MapboxGL.PointAnnotation>
//     )
// }

const MapAnnotation = ({item}) => {
return (
    <MapboxGL.PointAnnotation
    id={item.id}
    coordinate={item.geometry.coordinates}>
    <View style={ styles.annotationContainer }>
        <View style={ styles.annotation } />
    </View>
    <MapboxGL.Callout title='Annotation' />
    </MapboxGL.PointAnnotation>
)
}


    return (
        <View style={styles.container}>
            <MapboxGL.MapView localizeLabels={true} style={styles.map} centerCoordinate={[lonData, latData]} >
                <MapboxGL.Camera zoomLevel={16} animationMode={'flyTo'} animationDuration={0} centerCoordinate={[lonData, latData]} />
                    <MapboxGL.UserLocation animated={true} renderMode={'native'} />
                    {/* {MapAnnotation ()} */}
                    <FlatList
                    data={monumentsList}
                    renderItem={(item) => <MapAnnotation item={item.item} />}
                    keyExtractor={item => item.id}
                    />
            </MapboxGL.MapView>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    annotationContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15
    },
    annotation: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'blue',
        transform: [{ scale: 0.6 }]
    }
})

export default Map