import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Publicacion from './Publicacion';

const PUBLICACIONES_HARDCODEADAS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
    descripcion: 'Bastión de los Pescadores, Budapest',
    likes: 24,
  },
];

export default function ListaPublicaciones({ publicaciones = PUBLICACIONES_HARDCODEADAS }) {
  const navigation = useNavigation();

  const irADetalle = (publicacion) => {
    navigation.navigate('DetallePublicacion', { publicacion });
  };

  return (
    <FlatList
      data={publicaciones}
      keyExtractor={(item) => item.id}
      numColumns={3}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <Publicacion publicacion={item} onPress={irADetalle} />
      )}
    />
  );
}
