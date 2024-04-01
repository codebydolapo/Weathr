import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Details from './Details'
import * as Animatable from 'react-native-animatable'
import LifeIndex from './LifeIndex';
import { useSelector } from 'react-redux';
import { selectWeatherData, selectLocationData } from '../slices/dataSlice';


const Forecast = () => {

    const location = useSelector(selectLocationData)
    const weather = useSelector(selectWeatherData)

    return (
        <ScrollView className={`mx-4 flex-1 `} showsVerticalScrollIndicator={false}>
            <View className={`space-y-2 mt-20`}>
                <Text className={`text-white text-center text-8xl font-bold`}>{weather.temp_c}&#176;C</Text>
                <Text className={`text-white text-center text-base font-bold tracking-widest capitalize`}>{weather.condition.text}</Text>
            </View>
            <View className={`items-center justify-center mt-20`}>

                <Text className={`text-white text-center text-2xl font-bold tracking-widest`}>{location.country},
                    <Text className={`text-white text-center text-base font-semibold`}> {location.tz_id}</Text>
                </Text>
                <Text className={`text-white text-center text-sm font-light mt-2`}>Feels like {fahrenheitToCelsius(weather.feelslike_c)}&#176;C</Text>

            </View>
            <View className={`flex-row justify-between w-full mx-auto mt-10`}>
                <Details
                    image={"air"}
                    name={"wind"}
                    data={weather.wind_degree}
                    secondaryData={`${weather.wind_kph}km/h`}
                    unit={"EW"}
                />
                <Details
                    image={"water-drop"}
                    name={"precipitation"}
                    data={weather.humidity}
                    secondaryData={"59%"}
                    unit={"mm"}
                />
            </View>
            <View className={`flex-row justify-between w-full mx-auto mt-10`}>
                <Details
                    image={"air"}
                    name={"Air Quality"}
                    data={weather.temp_f}
                    secondaryData={"Good"}
                    unit={""}

                />
                <Details
                    image={'sunny'}
                    name={"UV Index"}
                    data={weather.uv}
                    secondaryData={"Strong"}
                    unit={""}

                />
            </View>
            <View className={`flex-row justify-between w-full mx-auto mt-10`}>
                <Details
                    image={"water-drop"}
                    name={"Humidity"}
                    data={weather.humidity}
                    secondaryData={""}
                    unit={"%"}
                />
                <Details
                    image={'sunny'}
                    name={"sun"}
                    data={""}
                    secondaryData={""}
                    unit={""}
                />
            </View>
            <LifeIndex />
            <TouchableOpacity className={`border-2 border-[#ffffff41] mt-2 items-center justify-center p-3 mb-5 rounded-lg`}>
                <Text className={`text-[#fff] text-sm`}>Display More</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Forecast