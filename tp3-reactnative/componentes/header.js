import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Detección de Anemia</Text>
      <Text style={styles.subtitle}>Aplicación educativa y predictiva sobre anemia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F9D2DC',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#8B1E3F',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B1E3F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#3A3A3A',
    textAlign: 'center',
    marginTop: 4,
  },
});
