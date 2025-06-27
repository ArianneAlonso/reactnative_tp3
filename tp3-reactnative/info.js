import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './componentes/header';

export default function Info() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>¿Qué es la anemia?</Text>
        <Text style={styles.cardText}>
          La anemia es una condición en la cual disminuye la cantidad de glóbulos rojos o la hemoglobina en la sangre,
          lo que provoca fatiga, debilidad y otros síntomas.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tipos y síntomas</Text>
        <Text style={styles.cardText}>
          Existen varios tipos de anemia: ferropénica, perniciosa, aplásica, entre otras. Los síntomas comunes incluyen
          mareos, piel pálida, palpitaciones y cansancio persistente.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Valores normales de referencia</Text>
        <Text style={styles.cardText}>Hemoglobina: 12–16 g/dL (Mujeres) / 13–17 g/dL (Hombres)</Text>
        <Text style={styles.cardText}>MCH: 27–33 pg</Text>
        <Text style={styles.cardText}>MCHC: 32–36 g/dL</Text>
        <Text style={styles.cardText}>MCV: 80–100 fL</Text>
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
    marginBottom: 15,
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
    marginBottom: 4,
  },
});
