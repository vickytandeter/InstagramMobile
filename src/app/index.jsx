import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PagPerfil from '../components/Perfil/PagPerfil';
import FeedPerfil from '../components/Perfil/FeedPerfil';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Perfil" component={PagPerfil} />

        <Stack.Screen name="FeedPerfil" component={FeedPerfil} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
