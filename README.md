# Weathr
This app is called Weathr, and is a weather app, if that wasn't immediately obvious.

## Screens/Landing

The entry point to the app is the `screens/Landing.js` file

This file contains the `screens/Loading.js` animation that displays the fun little gif while the API fetches the weather data for the location of the movile phone.

### Fetching Data
- The `screens/Landing.js` file opens with a `useEffect` hook that uses the `expo-location` api to fetch the location of the user.

- Thereafter, it feeds the phone's latitude and longitude information of the mobile phone into the `weather api` from `rapid api`, and fetches the exact location data, as well as the weather conditions of said place.

## Screens/Loading
As mentioned, this file contains the animation that keeps the user entertained as the API fetches the data to be displayed.

## Screens/HomePage
- This page contains the actual interface of the project, in which we can find the `TopBar`, `SearchBar` (both of which are conditionally rendered), as well as the `Forecast` component that holds the actual data

## ./slices
- This folder contains the `redux-toolkit` slices for storing data and accessing it again, all over the application.

- Inside it, we have the `searchSlice` which controls the input field, the text in it, as well as whether it is active or not.

- Thereafter, we have the `dataSlice` which holds the data for the weather and location