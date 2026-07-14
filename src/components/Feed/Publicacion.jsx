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
        <View style={styles.publicacionUsuario}>
            <Image source={{ uri: post.fotoPerfil }} style={styles.fotoPerfil} />
            <View>
              <Text style={styles.usuario}>@{post.usuario}</Text>
              <Text style={styles.fecha}>{post.fecha}</Text>
            </View>
          </View>
        
        <Image source={{ uri: post.contenido }} style={styles.publicacionImg} />

        <View style={styles.publicacionDesc}>
          
          <Text style={styles.descripcion}>{post.descripcion}</Text>

          <View style={styles.publicacionInteracciones}>
            <TouchableOpacity onPress={toggleLike} style={styles.boton}>
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={22}
                color={liked ? '#ED4956' : '#fff'}
              />
              <Text style={styles.contador}>{likes}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setMostrarComentarios(true)}
              style={styles.boton}
            >
              <Ionicons name="chatbubble-outline" size={20} color="#fff" />
              <Text style={styles.contador}>{post.comentarios}</Text>
            </TouchableOpacity>

            <View style={styles.boton}>
              <Ionicons name="paper-plane-outline" size={20} color="#fff" />
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
    backgroundColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#262626',
    paddingBottom: 10,
  },
  publicacionImg: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#1a1a1a',
  },
  publicacionDesc: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  publicacionUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 8,
  },
  fotoPerfil: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  usuario: {
    fontWeight: '600',
    fontSize: 13,
    color: '#fff',
  },
  fecha: {
    fontSize: 11,
    color: '#a8a8a8',
  },
  descripcion: {
    fontSize: 13,
    color: '#f5f5f5',
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
    color: '#f5f5f5',
  },
});