import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationBanner from '../components/LocationBanner';
import countries from '../data'


const Locations = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <SafeAreaView className={`h-full w-full flex-1 bg-black pt-10 px-2`}>
            <StatusBar style="light" />
            <View className={`w-full h-14 flex-row items-center justify-between px-2`}>
                <Text className={`text-white text-center text-2xl font-bold tracking-widest capitalize`}>Locations</Text>
                <TouchableOpacity className={` rounded-full p-2 items-center justify-center`}
                onPress = {()=>{navigation.navigate("Landing")}}
                >
                    <Icon name="backspace-outline" size={25} color="#fff" />
                </TouchableOpacity>
            </View>
            <ScrollView className={`w-full flex-1 px-2`}>
                {countries.map(({name, image})=>{
                    return <LocationBanner
                    image = {image}
                    name = {name}
                    key = {image}
                    />
                })}
            </ScrollView>

        </SafeAreaView>
    )
}


export default Locations