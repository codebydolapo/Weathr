import { View, Text, Image } from 'react-native'
import React from 'react'
import countries from '../data'

const LocationBanner = ({image, name}) => {
    return (
        <View className={`w-full h-40 my-2 rounded-lg relative items-start`}>
            <Image
                // source={{ uri: Image.resolveAssetSource(countries[0].image).uri }}
                source={{ uri: image }}
                className={`h-full w-full rounded-lg `}
            />
            <View className={`absolute bottom-0 rounded-bottom-inherit w-full h-14 bg-[#0000006c] items-center justify-center`}>
            <Text className={`text-white text-center text-base font-bold tracking-widest capitalize`}>{name}</Text>

            </View>
        </View>
    )
}

export default LocationBanner