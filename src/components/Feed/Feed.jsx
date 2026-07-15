import { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Publicacion from './Publicacion';
import Header from '../Header';
import Footer from '../Footer';
import Historias from './Historias';
import { searchPost } from '../../services/api';

export default function Feed({ onSelect }) {
  const [publicaciones, setPublicaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;

    // Un pedido trae las fotos del contenido y otro las fotos de perfil de
    // cada "usuario" del feed, todo desde la misma api de src/services/api.js.
    Promise.all([searchPost('', 15), searchPost('', 15)])
      .then(([contenidos, avatares]) => {
        if (!activo) return;

        const publicacionesFormateadas = contenidos.map((gato, index) => ({
          id: gato.id,
          contenido: gato.url,
          usuario: `cat_user_${index + 1}`,
          fotoPerfil: avatares[index % avatares.length]?.url,
          descripcion: 'Un gatito muy lindo 🐱',
          fecha: 'Hace unas horas',
          likes: Math.floor(Math.random() * 500),
          comentarios: Math.floor(Math.random() * 100),
          reenviados: Math.floor(Math.random() * 50),
        }));

        setPublicaciones(publicacionesFormateadas);
      })
      .catch((error) => console.error('Error trayendo gatos:', error))
      .finally(() => {
        if (activo) setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, []);

  return (
    <View style={styles.feed}>
      <Header/>

      {cargando ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          data={publicaciones}
          keyExtractor={(post) => post.id}
          ListHeaderComponent={Historias}
          renderItem={({ item }) => (
            <Publicacion post={item} onSelect={onSelect} />
          )}
          showsVerticalScrollIndicator={false}
          style={styles.lista}
          contentContainerStyle={styles.listContent}
        />
      )}

      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: '#000',
  },
  lista: {
    flex: 1,
  },
  listContent: {
    // Deja lugar abajo para que el Footer (fijo, position absolute) nunca
    // tape la última publicación.
    paddingBottom: 90,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});