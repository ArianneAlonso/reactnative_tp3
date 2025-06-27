import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function Subtareas({ route, navigation }) {
  const { tarea } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={tarea.subtareas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetalleSubtarea', { subtarea: item })}
          >
            <Text style={styles.title}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
    backgroundColor: '#FAE8ED',
  },
  card: {
    backgroundColor: '#ffe6eb',
    padding: 14,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#8B1E3F',
    borderWidth: 1.5,
  },
  title: {
    fontSize: 18,
    color: '#8B1E3F',
    fontWeight: 'bold',
  },
});
