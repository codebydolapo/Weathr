import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setSearchState, setSearchQuery } from '../slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery, selectSearchState } from '../slices/searchSlice';
import { selectWeatherData } from '../slices/dataSlice';
import { selectLocationData } from '../slices/dataSlice';
import { useNavigation } from '@react-navigation/core';


const TopBar = () => {
    const [showSearch, setShowSearch] = useState(true)
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
const navigation = useNavigation();

    const searchState = useSelector(selectSearchState)
    const searchQuery = useSelector(selectSearchQuery)

    const location = useSelector(selectLocationData)
    const data = useSelector(selectWeatherData)


    function toggleSearch() {
        if (searchState) {
            setShowSearch(false)
            dispatch(setSearchState(false))
        }
        else {
            setShowSearch(true)
            dispatch(setSearchState(true))
        }
    }

    useEffect(() => {
        console.log(location)
    })

    return (
        <View className={` flex-row mx-4 justify-between items-center h-14 backdrop-blur-md bg-white/30 rounded-xl px-2`}>
            <View className={`w-1/2 h-full justify-center items-start`}>
                <Text className={`text-white text-center text-xl font-extrabold tracking-widest`}>{location.name}</Text>
            </View>
            <View className={`w-1/2 h-full flex-row justify-end items-center`}>
                <TouchableOpacity className={` rounded-full p-2 m-1 items-center justify-center `}
                onPress = {()=>navigation.navigate("Locations")}
                >
                    <Icon name="microsoft-xbox-controller-menu" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity className={` rounded-full p-2 m-1 items-center justify-center `}
                onPress = {toggleSearch}
                >
                    <Icon name="airplane-search" size={25} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TopBar