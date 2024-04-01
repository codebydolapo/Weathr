import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/core'

const Loading = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <SafeAreaView className={`bg-[#69BDEE] h-full w-full`}>
            <View className ={`flex-1 justify-center items-center border-2 border-black`}>

            <Animatable.Image
                source={require("../assets/weathrLoading.gif")}
                animation={"slideInUp"}
                // iterationCount={1}
                className={`w-full`}
            />

            <Animatable.Text
                animation={"slideInUp"}
                // iterationCount={1}
                className={`text-lg my-10 text-white font-bold text-center`}
            >
                Loading...
            </Animatable.Text>

            <Progress.Bar size={60} indeterminate={true} color={"white"} />
            </View>
        </SafeAreaView>
    )
}

export default Loading