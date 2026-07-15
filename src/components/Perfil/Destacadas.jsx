import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Historia from './Historia';
import { searchPost } from '../../services/api';

const DESTACADAS_BASE = [
  { id: 'nueva', esNueva: true, etiqueta: 'Nuevo' },
  { id: '1', etiqueta: '.' },
  { id: '2', etiqueta: '.' },
  { id: '3', etiqueta: '.' },
];

export default function Destacadas({ destacadas: destacadasProp }) {
  const [destacadas, setDestacadas] = useState(destacadasProp || DESTACADAS_BASE);

  useEffect(() => {
    if (destacadasProp) return; // ya vienen con imagen si se pasan por props
    let activo = true;
    const conImagen = DESTACADAS_BASE.filter((item) => !item.esNueva);

    searchPost('', conImagen.length)
      .then((imagenes) => {
        if (!activo || imagenes.length === 0) return;
        let i = 0;
        setDestacadas(
          DESTACADAS_BASE.map((item) => {
            if (item.esNueva) return item;
            const imagen = imagenes[i % imagenes.length];
            i += 1;
            return { ...item, imageUrl: imagen.url };
          })
        );
      })
      .catch((error) => console.error('Error trayendo destacadas:', error));

    return () => {
      activo = false;
    };
  }, [destacadasProp]);

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
    marginBottom: 10,
  },
  listaContenido: {
    paddingHorizontal: 8,
  },
});
