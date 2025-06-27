import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Info from './info';
import Prediccion from './predicion';
import Consejo from './consejo';
import TareasStack from './tareas/estilotareas';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#F9D2DC',
        },
        headerTintColor: '#8B1E3F',
        tabBarActiveTintColor: '#8B1E3F',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#FAE8ED',
          borderTopWidth: 1,
          borderTopColor: '#F9D2DC',
          paddingBottom: 5,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Información') iconName = 'information-circle';
          else if (route.name === 'Predicción') iconName = 'analytics';
          else if (route.name === 'Consejos') iconName = 'heart';
          else if (route.name === 'Tareas') iconName = 'clipboard';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Información" component={Info} />
      <Tab.Screen name="Predicción" component={Prediccion} />
      <Tab.Screen name="Consejos" component={Consejo} />
      <Tab.Screen name="Tareas" component={TareasStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
