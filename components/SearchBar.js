import { View, Text, TextInput, TouchableOpacity, Animated, StyleSheet, Easing } from 'react-native'
import React, { useState, useRef } from 'react'
// import MagnifyingGlassIcon from "react-native-heroicons/outline"
// import { ChevronDownIcon, UserIcon, UserCircleIcon, TrashIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setSearchState, setKeyboardActive } from '../slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../slices/searchSlice';
import { selectSearchQuery, selectSearchState, selectKeyboardState} from '../slices/searchSlice';


const SearchBar = () => {

    const [showSearch, setShowSearch] = useState(true)
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);


    const dispatch = useDispatch()

    const searchState = useSelector(selectSearchState)
    const searchQuery = useSelector(selectSearchQuery)

    function toggleSearch() {
        if (searchState) {
            setShowSearch(false)
            dispatch(setSearchState(false))
        }
        else {
            setShowSearch(true)
            dispatch(setSearchState(true))
            dispatch(setKeyboardActive(false))
        }
    }


    const handleTextChange = (query) => {
        setSearchText(query); // Update search text state as user types
        dispatch(setSearchQuery(query)); // Example action dispatch (replace with your actual logic)
    };


    const handleFocus = () => {
        setIsFocused(true)
        dispatch(setKeyboardActive(true))
    };

    const handleBlur = () => {
        setIsFocused(false)
        dispatch(setKeyboardActive(false))
    };

  const keyboardState = useSelector(selectKeyboardState)


    return (
        <View className={`mx-4 z-50 justify-center items-center h-16 ${keyboardState && "top-[60%] absolute"}`}>
            <View className={`w-full flex-row h-14 justify-end items-center rounded-xl bg-[#ffffff33]`}>
                {/* {showSearch ? */}
                <TextInput
                    placeholder={"Search for city..."}
                    // placeholder={`${showSearch ? "Search for city..." : ""}`}
                    placeholderTextColor="white"
                    className={`pl-6 h-full flex-1 text-base text-white font-extrabold `}
                    onChangeText={handleTextChange} // Call handleTextChange on text change
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <View className={`flex-row space-x-1`}>

                    <TouchableOpacity className={``}
                        // onPress={``}
                    >
                        <Text className={`items-center justify-center w-7 h-7`}>
                            <Icon name="magnify" size={25} color="#fff" />
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className={` mr-2`}
                        onPress={toggleSearch}
                    >
                        <Text className={`items-center justify-center w-7 h-7`}>
                            <Icon name="backup-restore" size={25} color="#fff" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SearchBar

