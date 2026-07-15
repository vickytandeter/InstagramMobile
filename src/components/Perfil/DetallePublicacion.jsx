import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ComentariosModal from '../Feed/ComentariosModal';

const { width } = Dimensions.get('window');


export default function DetallePublicacion({ publicacion, usuario, avatarUrl }) {
  const [likeado, setLikeado] = useState(false);
  const [likes, setLikes] = useState(publicacion.likes ?? 0);
  const [mostrarComentarios, setMostrarComentarios] = useState(false);

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
        <TouchableOpacity onPress={alternarLike} style={styles.boton}>
          <Ionicons
            name={likeado ? 'heart' : 'heart-outline'}
            size={22}
            color={likeado ? '#ED4956' : '#fff'}
          />
          <Text style={styles.contador}>{likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMostrarComentarios(true)}
          style={styles.boton}
        >
          <Ionicons name="chatbubble-outline" size={20} color="#fff" />
          <Text style={styles.contador}>{publicacion.comentarios ?? 0}</Text>
        </TouchableOpacity>

        <View style={styles.boton}>
          <Ionicons name="paper-plane-outline" size={20} color="#fff" />
          <Text style={styles.contador}>{publicacion.reenviados ?? 0}</Text>
        </View>
      </View>

      <Text style={styles.caption}>
        <Text style={styles.usuarioCaption}>{usuario} </Text>
        {descripcion}
      </Text>

      <ComentariosModal
        visible={mostrarComentarios}
        onClose={() => setMostrarComentarios(false)}
      />
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
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },
  contador: {
    marginLeft: 4,
    fontSize: 12,
    color: '#f5f5f5',
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
