import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LifeIndexContainer from './LifeIndexContainer';


const LifeIndex = () => {
    return (
        <View className={`mt-10 w-full backdrop-blur-md bg-black/40 rounded-lg border-2 border-[#ffffff41]`}>
            <View className={`flex-row justify-start items-center w-full p-3 space-x-2`}>
                <Icon name={"umbrella-beach"} size={25} color="#ffffff" />
                <Text className={`text-white text-lg font-extrabold`}>Life Index</Text>
            </View>
            <View className={"flex-wrap flex-row space-y-2"}>
                <LifeIndexContainer
                    icon={`lotion`}
                    message={`Suggested sun protection`}
                />
                <LifeIndexContainer
                    icon={`basketball`}
                    message={`Comfortable for exercise`}
                />
                <LifeIndexContainer
                    icon={`bag-suitcase`}
                    message={`suitable for travel`}
                />
                <LifeIndexContainer
                    icon={`road`}
                    message={`Road in good condition`}
                />
                <LifeIndexContainer
                    icon={`face-mask`}
                    message={`Nice breathing index`}
                />
                <LifeIndexContainer
                    icon={`window-open-variant`}
                    message={`No need for mosquito repellent`}
                />
            </View>
            <TouchableOpacity className = {`border-t-2 border-[#ffffff41] mt-5 items-center justify-center p-3`}>
                <Text className={`text-white text-sm`}>Tap To View Details</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LifeIndex