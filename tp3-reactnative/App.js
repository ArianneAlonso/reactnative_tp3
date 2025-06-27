import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import HomeTabs from './hometabs';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!loggedIn ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {() => <Login onLogin={() => setLoggedIn(true)} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Inicio" component={HomeTabs} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
