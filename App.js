import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/register';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
       <Stack.Screen
        name="login" component={Login} options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="register" component={Register} options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="home" component={Home} options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;