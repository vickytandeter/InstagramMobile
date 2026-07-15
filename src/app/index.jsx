import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import PagPerfil from '../components/Perfil/PagPerfil';
import FeedPerfil from '../components/Perfil/FeedPerfil';
import Feed from '../components/Feed/Feed';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#000" />

          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Feed" component={Feed} />

            <Stack.Screen name="Perfil" component={PagPerfil} />

            <Stack.Screen name="FeedPerfil" component={FeedPerfil} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
