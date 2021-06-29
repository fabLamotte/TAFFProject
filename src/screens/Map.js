import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import Geolocation from '@react-native-community/geolocation'

// async function fetchMapData() {
//     const response = await fetch('http://bano.openstreetmap.fr/data/');
//     console.log(response);
//     return await response.json();
// }

MapboxGL.setAccessToken('sk.eyJ1IjoidGhpYmF1bHQtaGJzZGV2IiwiYSI6ImNrcWhybWd0bzBlbm8yb254ZmJycnViczEifQ.s-13ZSWVt4vrl00hZizGaw')

const Map = () => {

    const [latData, setLatData] = useState('');
    const [lonData, setLonData] = useState('');
    Geolocation.getCurrentPosition(info => setLatData(info.coords.latitude));
    Geolocation.getCurrentPosition(info => setLonData(info.coords.longitude));
    console.log(latData)
    console.log(lonData)

    return (
        <View style={styles.container}>
            <MapboxGL.MapView
                centerCoordinate={[lonData, latData]}
                localizeLabels={true}
                style={styles.map}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    map: {
        flex: 1
    }
})

export default Map