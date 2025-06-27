import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tareas from './tareas';
import Subtareas from './subtareas';
import DetalleSubtarea from './detalledesubtareas';

const Stack = createNativeStackNavigator();

export default function TareasStack() {
  const headerOptions = {
    headerStyle: {
      backgroundColor: '#F9D2DC',
    },
    headerTintColor: '#8B1E3F',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Tareas" component={Tareas} options={{ title: 'Tareas' }} />
      <Stack.Screen name="Subtareas" component={Subtareas} options={{ title: 'Subtareas' }} />
      <Stack.Screen name="DetalleSubtarea" component={DetalleSubtarea} options={{ title: 'Detalle de Subtarea' }} />
    </Stack.Navigator>
  );
}