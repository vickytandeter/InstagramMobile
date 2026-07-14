import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Publicacion from './PublicacionPerfil';
import { searchPost } from '../services/api';
import { PERFIL_HARDCODEADO } from './InfoPerfil';

export default function ListaPublicaciones() {
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

  // Al tocar una publicación se abre el feed con exactamente las mismas
  // imágenes del perfil, arrancando en la que se tocó, y con el mismo
  // usuario/avatar que se ve en InfoPerfil.
  const irAlFeed = (publicacion) => {
    navigation.navigate('Feed', {
      publicaciones,
      publicacionId: publicacion.id,
      usuario: PERFIL_HARDCODEADO.usuario,
      avatarUrl: PERFIL_HARDCODEADO.fotoUrl,
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
      data={publicaciones}
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
