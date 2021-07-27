import React, {useState} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker'
import {Avatar} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation } from 'react-native-paper';
//https://blog.crowdbotics.com/how-to-use-react-native-image-picker/

const SimpleImagePicker = () => {

  const [imgSrc, setImgSrc] = useState(null)


  const selectImg = () => {
    let options = {
      title: 'you can take a photo',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOption: {
        skipBackup: true
      }
    }

    launchImageLibrary(options, response => {
      
      if(response.didCancel){
        console.log('User cancel photo picker')
        Alert.alert("You did not select any image")
      } else if (response.error) {
        console.log("imagePicker error:", response.error)
      } else if (response.customButton) {
        console.log("user tapped custom button", response.customButton)
      } else {
        let source = {uri: response.assets[0].uri}
        setImgSrc(source.uri)
      }
    })
  }

  const takePicture = () => {
    let options = {
      title: 'you can take a photo',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOption: {
        skipBackup: true
      }
    }

    launchCamera(options, response => {
      
      if(response.didCancel){
        console.log('User cancel photo picker')
        Alert.alert("You did not select any image")
      } else if (response.error) {
        console.log("imagePicker error:", response.error)
      } else if (response.customButton) {
        console.log("user tapped custom button", response.customButton)
      } else {
        console.log("Francois Demilly response",response)
        let source = {uri: response.assets[0].uri}
        setImgSrc(source.uri)
      }
    })
  }

  return(
    <View style={styles.centerContainer}>
      <View style={styles.imageCont} >
      {imgSrc === null ?
      <Avatar.Icon size={192} icon='account' color='#8DC56C' style={{backgroundColor: '#fff'}}/>
      :  
      <ImageBackground
            source={{ uri: imgSrc }}
            style={styles.imageBox}
            resizeMethod='resize'
            resizeMode='cover'
          ></ImageBackground>
      }
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btnContainer1}>
          <TouchableOpacity
          style={styles.button}
          onPress={takePicture}>
            <Icon name="camera" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer2}>
          <TouchableOpacity
          style={styles.button}
          onPress={selectImg}>
            <Icon name="image-move" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centerContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    height: 60,
    width: 200,
    top: -25
  },
  btnContainer1: {
    flexDirection: 'row',
    alignItems: "flex-end",
    
  },
  btnContainer2: {
    flexDirection: 'row',
  },

  button: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8DC56C',
    },
  imageCont: {
    width: 192,
    height: 192, 
    borderRadius: 90,
    overflow: 'hidden',
    justifyContent: 'center',
    },
  imageBox: {
    width: 192,
    height: 192,
    borderRadius: 90,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative'
    
  }
});

export default SimpleImagePicker