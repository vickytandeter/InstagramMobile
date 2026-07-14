import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');


export default function DetallePublicacion({ publicacion, usuario, avatarUrl }) {
  const [likeado, setLikeado] = useState(false);
  const [likes, setLikes] = useState(publicacion.likes ?? 0);

  const alternarLike = () => {
    setLikeado((estabaLikeado) => {
      const nuevoEstado = !estabaLikeado;
      setLikes((actual) => actual + (nuevoEstado ? 1 : -1));
      return nuevoEstado;
    });
  };

  const descripcion =
    publicacion.breeds && publicacion.breeds.length > 0
      ? `Gato de raza: ${publicacion.breeds[0].name}`
      : 'Lindo gatito 🐱';

  return (
    <View style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <Text style={styles.usuario} numberOfLines={1}>
          {usuario}
        </Text>
        <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
      </View>

      <Image source={{ uri: publicacion.url }} style={styles.imagen} />

      <View style={styles.acciones}>
        <TouchableOpacity onPress={alternarLike} hitSlop={8} activeOpacity={0.7}>
          <Ionicons
            name={likeado ? 'heart' : 'heart-outline'}
            size={26}
            color={likeado ? '#ed4956' : '#fff'}
            style={styles.icono}
          />
        </TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={24} color="#fff" style={styles.icono} />
        <Ionicons name="paper-plane-outline" size={24} color="#fff" style={styles.icono} />
        <View style={styles.espacio} />
        <Ionicons name="bookmark-outline" size={24} color="#fff" />
      </View>

      <Text style={styles.likesTexto}>{likes} me gusta</Text>

      <Text style={styles.caption}>
        <Text style={styles.usuarioCaption}>{usuario} </Text>
        {descripcion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 18,
  },
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    backgroundColor: '#1a1a1a',
  },
  usuario: {
    color: '#fff',
    fontWeight: '600',
    flex: 1,
  },
  imagen: {
    width,
    height: width,
    backgroundColor: '#1a1a1a',
  },
  acciones: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  icono: {
    marginRight: 14,
  },
  espacio: {
    flex: 1,
  },
  likesTexto: {
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 12,
    marginTop: 8,
  },
  caption: {
    color: '#fff',
    paddingHorizontal: 12,
    marginTop: 4,
  },
  usuarioCaption: {
    fontWeight: '600',
  },
});
