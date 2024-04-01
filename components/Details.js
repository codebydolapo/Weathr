import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import sunDial from "../assets/sunDial.png"


const Details = ({ image, data, secondaryData, name, unit }) => {
  
  return (
    <TouchableOpacity className={`items-center justify-start w-[49%] h-32 p-2 backdrop-blur-md bg-white/30 rounded-xl space-y-6`}>
      <View className={`flex-row justify-between items-center w-full`}>
        <View className={`flex-row justify-start items-center space-x-1`}>
          <Icon name={image} size={25} color="#ffffff" />
          <Text className={`text-white text-center text-sm capitalize`}>{name}</Text>
        </View>
        <Icon name="arrow-forward-ios" size={20} color="#ffffff" />
      </View>
      {name == "sun" ?

        <View className={`justify-center items-start w-12 h-12 `}>
          <Image
            source={{ uri: Image.resolveAssetSource(sunDial).uri }}
            className={`h-full w-full rounded-full`}
          />
        </View>
        :

        <View className={`flex-row justify-start items-end w-full space-x-1 `}>
          <Text className={`text-white text-3xl font-semibold`}>{data}</Text>
          {unit && <Text className={`text-white text-base font-semibold`}>{unit}</Text>}
          {secondaryData && <Text className={`text-white text-base font-semibold`}>|</Text>}
          <Text className={`text-white  text-xs font-semibold`}>{secondaryData}</Text>
        </View>
      }
    </TouchableOpacity>
  )
}

export default Details