import { View, Text } from 'react-native'
import React, { useState, useEffect, useLayoutEffect, useDebugValue } from 'react'
import * as Location from 'expo-location';
import HomePage from './HomePage';
import Loading from './Loading';
import { useNavigation } from '@react-navigation/core';
// import response from '../utils/response';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, selectWeatherData } from '../slices/dataSlice';
import axios from 'axios';


const Landing = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {

            try {

                //GETS THE LOCATION OF THE MOBILE PHONE
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }

                let _location = await Location.getCurrentPositionAsync({});

                const options = {
                    method: 'GET',
                    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                    params: { q: `${_location.coords.latitude.toFixed(2)}, ${_location.coords.longitude.toFixed(2)}` },
                    headers: {
                        'X-RapidAPI-Key': 'b9841e479cmshb7619c7b1c75221p111b03jsna08ee37f1d6e',
                        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                    }
                };


                const response = await axios.request(options);
                dispatch(setWeatherData(response.data))



            } catch (error) {
                console.error(error);
            }

        })();
    }, []);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const data = useSelector(selectWeatherData)
    return (
        <View>
            {data ?
                <HomePage />
                :
                <Loading />

            }
        </View>
    )
}

export default Landing


