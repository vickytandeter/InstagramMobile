import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ComentariosModal from './ComentariosModal';

export default function Publicacion({ post, onSelect }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [mostrarComentarios, setMostrarComentarios] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.publicacion}
        onPress={() => onSelect && onSelect(post)}
      >
        <Image source={{ uri: post.contenido }} style={styles.publicacionImg} />

        <View style={styles.publicacionDesc}>
          <View style={styles.publicacionUsuario}>
            <Image source={{ uri: post.fotoPerfil }} style={styles.fotoPerfil} />
            <View>
              <Text style={styles.usuario}>@{post.usuario}</Text>
              <Text style={styles.fecha}>{post.fecha}</Text>
            </View>
          </View>

          <Text style={styles.descripcion}>{post.descripcion}</Text>

          <View style={styles.publicacionInteracciones}>
            <TouchableOpacity onPress={toggleLike} style={styles.boton}>
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={22}
                color={liked ? '#ED4956' : '#262626'}
              />
              <Text style={styles.contador}>{likes}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setMostrarComentarios(true)}
              style={styles.boton}
            >
              <Ionicons name="chatbubble-outline" size={20} color="#262626" />
              <Text style={styles.contador}>{post.comentarios}</Text>
            </TouchableOpacity>

            <View style={styles.boton}>
              <Ionicons name="paper-plane-outline" size={20} color="#262626" />
              <Text style={styles.contador}>{post.reenviados}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <ComentariosModal
        visible={mostrarComentarios}
        onClose={() => setMostrarComentarios(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  publicacion: {
    marginBottom: 14,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dbdbdb',
    paddingBottom: 10,
  },
  publicacionImg: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#efefef',
  },
  publicacionDesc: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  publicacionUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  fotoPerfil: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#dbdbdb',
  },
  usuario: {
    fontWeight: '600',
    fontSize: 13,
    color: '#262626',
  },
  fecha: {
    fontSize: 11,
    color: '#8e8e8e',
  },
  descripcion: {
    fontSize: 13,
    color: '#262626',
    marginBottom: 8,
  },
  publicacionInteracciones: {
    flexDirection: 'row',
  },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },
  contador: {
    marginLeft: 4,
    fontSize: 12,
    color: '#262626',
  },
});