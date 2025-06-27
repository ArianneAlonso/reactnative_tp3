import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { tareasData } from './tareabd';

export default function Tareas({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tareasData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Subtareas', { tarea: item })}
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
    backgroundColor: '#fff0f0',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderColor: '#8B1E3F',
    borderWidth: 2,
  },
  title: {
    fontSize: 16,
    color: '#8B1E3F',
    fontWeight: 'bold',
  },
});
