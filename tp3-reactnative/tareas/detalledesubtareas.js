import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalleSubtarea({ route }) {
  const { subtarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subtarea.titulo}</Text>
      <Text style={styles.description}>{subtarea.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FAE8ED',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B1E3F',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#3A3A3A',
  },
});
