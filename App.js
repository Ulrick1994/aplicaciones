import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AlbumScreen from './screens/AlbumScreen';
import CreateAlbumScreen from './screens/CreateAlbumScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator para manejar las pantallas de Home, Album y CreateAlbum
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Álbumes' }} />
      <Stack.Screen name="Album" component={AlbumScreen} options={{ title: 'Ver Álbum' }} />
      <Stack.Screen name="CreateAlbum" component={CreateAlbumScreen} options={{ title: 'Crear Álbum' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{ title: 'Inicio' }} />
        {/* Agrega aquí otras pestañas si necesitas más pantallas principales */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}