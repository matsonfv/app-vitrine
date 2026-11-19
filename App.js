// Arquivo: App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CatalogoScreen from './src/screens/VitrineScreen';
import DetalhesCursoScreen from './src/screens/DetalhesProdutoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Catalogo"
        screenOptions={{
          headerStyle: { backgroundColor: '#0F172A' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Catalogo"
          component={CatalogoScreen}
          options={{ title: 'Catálogo de Cursos' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesCursoScreen}
          options={{ title: 'Detalhes do Curso' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}