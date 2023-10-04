import React from 'react'
import Index from './Index';

const Register = () => {
    const Stack = createStackNavigator();
    return (
      <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Register" component={Register}/>
              <Stack.Screen name="Home" component={Index}/>
            </Stack.Navigator>
          </NavigationContainer>
      </>
    )
}

export default Register