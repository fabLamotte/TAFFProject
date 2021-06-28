import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const BottomTab = (props) => {
    const {
        state,
        descriptors,
        navigation
    } = props
    
    return(
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
                const isFocused = state.index === index;
                let iconName;

                switch (route.name) {
                case 'Carte':
                    iconName = "map-marker"
                    break;
                case 'Profile':
                    iconName = "user"
                    break;
                case 'Covoiturage':
                    iconName = "car"
                    break;
                }
                const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) 
                {
                    navigation.navigate(route.name);
                }
            };

            
            return route.name !== "Carte" ? (
                <View style={styles.buttonNav}>
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{alignItems:'center', width:'100%', zIndex:1}}
                        >
                            <Icon
                                animated={true}
                                name={iconName}
                                size={isFocused ? 35 : 30}
                                color={isFocused ? '#cc2936' : '#FFF'}
                            />
                            <Text style={{color: isFocused ? '#cc2936' : '#FFF'}}> {route.name} </Text>
                    </TouchableOpacity>
                </View>
                
            ) : (
                <View style={styles.bubbleMap}>
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={styles.mapButton}
                        >
                            <Icon
                                name={iconName}
                                size={50}
                                color={isFocused ? '#cc2936' : '#FFF'}
                            /> 
                            <Text style={{color: isFocused ? '#cc2936' : '#FFF'}}> {route.name} </Text>
                    </TouchableOpacity>
                </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'10%',
        width:'100%',
        backgroundColor:'#8DC56C',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopWidth:2,
        borderTopColor:'white',
        flexDirection:'row'
    }, 
    buttonNav:{
        width:'50%',
        alignItems:'center',
    },
    bubbleMap:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
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
        alignItems:'center',
        zIndex:2
    },
    iconName:{
        textAlign:'center',
        color:'white',
    },
    focused:{
        color:'red'
    },
})

export default BottomTab