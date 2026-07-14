import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const TAMANIO_ITEM = width / 3;

export default function Publicacion({ publicacion, onPress }) {
  return (
    <TouchableOpacity
      style={styles.contenedor}
      activeOpacity={0.8}
      onPress={() => onPress && onPress(publicacion)}
    >
      <Image source={{ uri: publicacion.url }} style={styles.imagen} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: TAMANIO_ITEM,
    height: TAMANIO_ITEM,
    padding: 1,
  },
  imagen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1a1a1a',
  },
});
