import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, ImageBackground, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../components/SearchBar';
import { useSelector } from 'react-redux';
import { selectSearchState, selectSearchQuery, selectKeyboardState } from '../slices/searchSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import countries from '../countries';
import filterCountries from '../utils/autocomplete';
import location from '../assets/location.png'
import Forecast from '../components/Forecast';
import TopBar from '../components/TopBar';


const HomePage = () => {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([1, 2, 3])
  const [countryArray, setCountryArray] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const searchState = useSelector(selectSearchState)
  const searchQuery = useSelector(selectSearchQuery)
  const keyboardState = useSelector(selectKeyboardState)

  useEffect(() => {
    setCountryArray(filterCountries(searchQuery))
  }, [searchQuery])

  const backgroundImage = require('../assets/__bg.png');


  

  return (

    <SafeAreaView className={`h-full w-full `}>
      <ImageBackground source={backgroundImage} style={styles.container} className={`flex-1 items-center justify-end`}>
        <StatusBar style="light" />
        <View className={`w-screen h-screen`}>

          {searchState && <TopBar />}
          {!searchState && <SearchBar />}
          {locations.length > 0 && searchQuery != "" && searchState &&
            <FlatList
              // data={countries}
              data={countryArray}
              initialNumToRender={5}
              className={` bg-gray-300 w-[90%] max-h-24 rounded-xl mx-auto`}
              ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'gray' }} />}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={`flex-row p-3 px-4 h-12 items-center justify-start`}
                >
                  
                  <Image
                    source={{ uri: Image.resolveAssetSource(location).uri }}
                    className={`items-center justify-center w-7 h-7 rounded-full mx-2`}
                  />
                  <Text className={`text-black text-lg`}>{item.name}, {item.location}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />}

          {!keyboardState && <Forecast />}
        </View>
      </ImageBackground>

    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    resizeMode: 'cover', // Or 'contain', 'stretch', 'repeat'
  },
});