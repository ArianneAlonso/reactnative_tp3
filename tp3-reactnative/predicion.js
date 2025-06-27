import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from './componentes/header';

export default function Prediccion() {
  const [gender, setGender] = useState('Femenino');
  const [hb, setHb] = useState('');
  const [mch, setMch] = useState('');
  const [mchc, setMchc] = useState('');
  const [mcv, setMcv] = useState('');
  const [resultado, setResultado] = useState('');

  const predecirAnemia = () => {
    const hbNum = parseFloat(hb);
    const mchNum = parseFloat(mch);
    const mchcNum = parseFloat(mchc);
    const mcvNum = parseFloat(mcv);

    if (isNaN(hbNum) || isNaN(mchNum) || isNaN(mchcNum) || isNaN(mcvNum)) {
      Alert.alert('Error', 'Por favor ingresa valores numéricos válidos en todos los campos.');
      return;
    }

    let clasificacion = 'Normal';
    let probabilidad = 10;

    if ((gender === 'Femenino' && hbNum < 12) || (gender === 'Masculino' && hbNum < 13)) {
      clasificacion = 'Posible anemia';
      probabilidad += 40;
    }

    if (mchNum < 27 || mchNum > 33) {
      clasificacion = 'Posible anemia';
      probabilidad += 20;
    }

    if (mchcNum < 32 || mchcNum > 36) {
      clasificacion = 'Posible anemia';
      probabilidad += 20;
    }

    if (mcvNum < 80 || mcvNum > 100) {
      clasificacion = 'Posible anemia';
      probabilidad += 20;
    }

    if (probabilidad > 100) probabilidad = 100;

    setResultado(`Probabilidad de anemia: ${probabilidad}%\nClasificación estimada: ${clasificacion}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ingresá tus datos</Text>

        <Text style={styles.label}>Género</Text>
        <TextInput
          value={gender}
          onChangeText={setGender}
          style={styles.input}
          placeholder="Femenino o Masculino"
          autoCapitalize="words"
        />

        <Text style={styles.label}>Hemoglobina (g/dL)</Text>
        <TextInput
          value={hb}
          onChangeText={setHb}
          keyboardType="numeric"
          style={styles.input}
          placeholder="Ej: 13.5"
        />

        <Text style={styles.label}>MCH (pg)</Text>
        <TextInput
          value={mch}
          onChangeText={setMch}
          keyboardType="numeric"
          style={styles.input}
          placeholder="Ej: 29"
        />

        <Text style={styles.label}>MCHC (g/dL)</Text>
        <TextInput
          value={mchc}
          onChangeText={setMchc}
          keyboardType="numeric"
          style={styles.input}
          placeholder="Ej: 34"
        />

        <Text style={styles.label}>MCV (fL)</Text>
        <TextInput
          value={mcv}
          onChangeText={setMcv}
          keyboardType="numeric"
          style={styles.input}
          placeholder="Ej: 85"
        />

        <Button title="Predecir" onPress={predecirAnemia} color="#8B1E3F" />

        {resultado ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{resultado}</Text>
          </View>
        ) : null}
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
  label: {
    fontSize: 14,
    color: '#3A3A3A',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8B1E3F',
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#ffffff',
    marginTop: 4,
  },
  resultContainer: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#F9D2DC',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#8B1E3F',
  },
  resultText: {
    fontSize: 16,
    color: '#8B1E3F',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});