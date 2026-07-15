import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Publicacion from './PublicacionPerfil';
import { searchPost } from '../../services/api';
import { PERFIL_HARDCODEADO } from './InfoPerfil';

export default function ListaPublicaciones({ perfil, publicacionInicial }) {
  const navigation = useNavigation();
  const [publicaciones, setPublicaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true;

    searchPost('')
      .then((datos) => {
        if (activo) setPublicaciones(datos);
      })
      .catch((err) => {
        if (activo) setError(err.message);
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, []);

  const usuarioActivo = perfil?.usuario || PERFIL_HARDCODEADO.usuario;
  const avatarActivo = perfil?.fotoUrl || PERFIL_HARDCODEADO.fotoUrl;

  // La publicación desde la que se llegó (tocando el usuario en el feed)
  // no viene en el mismo formato que las que trae searchPost, así que se
  // adapta antes de mezclarla con el resto.
  const publicacionInicialFormateada = publicacionInicial
    ? {
        id: publicacionInicial.id,
        url: publicacionInicial.contenido,
        likes: publicacionInicial.likes,
        breeds: [],
      }
    : null;

  const publicacionesAMostrar = publicacionInicialFormateada
    ? [
        publicacionInicialFormateada,
        ...publicaciones.filter((p) => p.id !== publicacionInicialFormateada.id),
      ]
    : publicaciones;

  // Al tocar una publicación se abre el detalle con exactamente las mismas
  // imágenes del perfil, arrancando en la que se tocó, y con el mismo
  // usuario/avatar que se ve en InfoPerfil.
  const irAlFeed = (publicacion) => {
    navigation.navigate('FeedPerfil', {
      publicaciones: publicacionesAMostrar,
      publicacionId: publicacion.id,
      usuario: usuarioActivo,
      avatarUrl: avatarActivo,
    });
  };

  if (cargando) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centrado}>
        <Text style={styles.textoError}>No se pudieron cargar las publicaciones</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={publicacionesAMostrar}
      keyExtractor={(item) => item.id}
      numColumns={3}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <Publicacion publicacion={item} onPress={irAlFeed} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  centrado: {
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoError: {
    color: '#a8a8a8',
  },
});
