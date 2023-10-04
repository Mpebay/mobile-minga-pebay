import Index from './assets/components/Index';
import Register from './assets/components/Register';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function App() {

  const Stack = createStackNavigator();
  return (
    <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Index}/>
            <Stack.Screen name="Register" component={Register}/>
          </Stack.Navigator>
        </NavigationContainer>
    </>
  )


}
    