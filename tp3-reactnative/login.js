import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detección de Anemia</Text>

      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#8B1E3F99"
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#8B1E3F99"
        style={styles.input}
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE8ED',  // fondo rosa pastel
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B1E3F', // color vino
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: '#8B1E3F',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#3A3A3A',
    marginBottom: 20,
    backgroundColor: '#fff0f0',
  },
  button: {
    backgroundColor: '#8B1E3F',
    paddingVertical: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FAE8ED',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
