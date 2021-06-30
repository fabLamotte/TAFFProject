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
    //   <View >
    //     <View>
    //       <Text></Text>
    //     </View>
    //     <Icon name="map-marker" color="#31C283" size={45} />
    //   </View>
    );
   };

MapboxGL.setAccessToken('sk.eyJ1IjoidGhpYmF1bHQtaGJzZGV2IiwiYSI6ImNrcWhybWd0bzBlbm8yb254ZmJycnViczEifQ.s-13ZSWVt4vrl00hZizGaw')
MapboxGL.setTelemetryEnabled(false)
const Map = () => {

    const [latData, setLatData] = useState('');
    const [lonData, setLonData] = useState('');
    Geolocation.getCurrentPosition(info => setLatData(info.coords.latitude));
    Geolocation.getCurrentPosition(info => setLonData(info.coords.longitude));
    console.log(latData)
    console.log(lonData)

    

    return (
        <View style={styles.container}>
            <MapboxGL.MapView zoomLevel={14} localizeLabels={true} showUserLocation={true} style={styles.map} centerCoordinate={[lonData, latData]} >
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