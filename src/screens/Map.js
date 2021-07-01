import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import Geolocation from '@react-native-community/geolocation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AnnotationContent = ({
   }) => {
    return (
        <View>
            <Icon name="human" size={40} color="#C4585B" />
        </View>
    );
   };

MapboxGL.setAccessToken('sk.eyJ1IjoidGhpYmF1bHQtaGJzZGV2IiwiYSI6ImNrcWhybWd0bzBlbm8yb254ZmJycnViczEifQ.s-13ZSWVt4vrl00hZizGaw')
MapboxGL.setTelemetryEnabled(false)



const Map = () => {

    const [latData, setLatData] = useState('');
    const [lonData, setLonData] = useState('');
    const radiusData = useState('1500')
    Geolocation.getCurrentPosition(info => setLatData(info.coords.latitude));
    Geolocation.getCurrentPosition(info => setLonData(info.coords.longitude));
    console.log(latData)
    console.log(lonData)

    const getHistoricMonumentBuildingsFromApi = async () => {
        try {
            let response = await fetch(
                'https://heritage.toolforge.org/api/api.php?action=search&coord' + latData + ',' + lonData + '&radius=' + radiusData + '&stitem=total&format=json'
            )
            let jsonBuildings = await response.json();
            console.log(jsonBuildings.monuments);
        } catch (error) {
            console.error(error)
        }
    }
    
    getHistoricMonumentBuildingsFromApi(latData, lonData);

    

    return (
        <View style={styles.container}>
            <MapboxGL.MapView localizeLabels={true} style={styles.map}  >
                <MapboxGL.Camera zoomLevel={16} animationMode={'flyTo'} animationDuration={0} centerCoordinate={[lonData, latData]} />
                <MapboxGL.MarkerView coordinate={[lonData, latData]}>
                    <View>
                        <AnnotationContent />
                    </View>
                </MapboxGL.MarkerView>
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
})

export default Map