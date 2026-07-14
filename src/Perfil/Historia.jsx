import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Historia({ historia, onPress }) {
  const esNueva = historia.esNueva;

  return (
    <TouchableOpacity
      style={styles.contenedor}
      activeOpacity={0.7}
      onPress={() => onPress && onPress(historia)}
    >
      {esNueva ? (
        <View style={styles.circuloNuevo}>
          <Ionicons name="add" size={28} color="#fff" />
        </View>
      ) : (
        <View style={styles.circuloImagen}>
          <Image source={{ uri: historia.imageUrl }} style={styles.imagen} />
        </View>
      )}
      <Text style={styles.etiqueta} numberOfLines={1}>
        {historia.etiqueta}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 72,
  },
  circuloNuevo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circuloImagen: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#666',
    padding: 2,
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  etiqueta: {
    marginTop: 4,
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});
