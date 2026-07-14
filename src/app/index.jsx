import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PagPerfil from '../Perfil/PagPerfil';
import DetallePublicacion from '../Perfil/DetallePublicacion';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Perfil" component={PagPerfil} />

        <Stack.Screen
          name="DetallePublicacion"
          component={DetallePublicacion}
          options={{ presentation: 'transparentModal', animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
