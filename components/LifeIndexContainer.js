import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const LifeIndexContainer = ({icon, message}) => {
  return (
    <TouchableOpacity className = {`items-center justify-center w-[50%] h-24 p-2  my-2`}>
                <Icon name={icon} size={25} color="#ffffff" />
        <Text className={`text-white text-center text-xs font-light mt-2`}>{message}</Text>

    </TouchableOpacity>
  )
}

export default LifeIndexContainer