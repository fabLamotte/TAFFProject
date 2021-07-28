import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import { getFilmsFromApi } from './API/TMDB'
import CovoiturageItem from './CovoiturageItem'

const App = () => {

  const [films, setFilms ] = useState();

  const [searchedText, setSearchedText] = useState(null);
  
  const loadFilms = () => {
    
    if (searchedText !=null) { 
          getFilmsFromApi(searchedText).then(data => {
            console.log(data)

          setFilms(data.results)
      })
    }
  }

    const searchTextInputChanged = (text) => {
      setSearchedText(text) 
    }
    
  return(
    <View style={styles.mainContainer}>
      <Text>Hello World!</Text>
      <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => {searchTextInputChanged(text),loadFilms(text) }}

        />
        <Button title='Rechercher' onPress={() => loadFilms()}/>

      <FlatList
            data={films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem item={item}/> }
          />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    alignContent:'center',
    alignItems:'center',
  }
})

export default App