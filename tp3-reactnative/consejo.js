import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from './componentes/header';

export default function Consejo() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Consejos para prevenir la anemia</Text>
        <Text style={styles.cardText}>
          Para prevenir la anemia es importante consumir alimentos ricos en hierro como hígado, carne roja o espinaca, y acompañarlos con vitamina C para mejorar su absorción.
          También se recomienda evitar el exceso de café o té durante las comidas, ya que pueden reducir la absorción del hierro, y realizar controles médicos periódicos si se presentan síntomas persistentes.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#FAE8ED' },
  card: {
    backgroundColor: '#fff0f0',
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#8B1E3F',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B1E3F',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#3A3A3A',
  },
});
