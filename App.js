import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import Landing from './screens/Landing';
import { store } from './store'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Locations from './screens/Locations';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={HomePage} /> */}
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Locations" component={Locations} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )

}