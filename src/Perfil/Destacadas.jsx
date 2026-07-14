import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Historia from './Historia';

const DESTACADAS_HARDCODEADAS = [
  { id: 'nueva', esNueva: true, etiqueta: 'Nuevo' },
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&q=80',
    etiqueta: '❤️🤍',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200&q=80',
    etiqueta: '🇾🇪',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&q=80',
    etiqueta: '👤',
  },
];

export default function Destacadas({ destacadas = DESTACADAS_HARDCODEADAS }) {
  return (
    <View style={styles.contenedor}>
      <FlatList
        data={destacadas}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listaContenido}
        renderItem={({ item }) => <Historia historia={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 16,
  },
  listaContenido: {
    paddingHorizontal: 8,
  },
});
