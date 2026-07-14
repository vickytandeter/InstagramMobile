import { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Publicacion from './Publicacion';
import Header from '../Header';
import Footer from '../Footer';
import Historias from './Historias';

export default function Feed({ onSelect }) {
  const [publicaciones, setPublicaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=15')
      .then((response) => {
        const publicacionesFormateadas = response.data.map((gato, index) => ({
          id: gato.id,
          contenido: gato.url,
          usuario: `cat_user_${index + 1}`,
          fotoPerfil: `https://i.pravatar.cc/40?img=${index + 1}`,
          descripcion: 'Un gatito muy lindo 🐱',
          fecha: 'Hace unas horas',
          likes: Math.floor(Math.random() * 500),
          comentarios: Math.floor(Math.random() * 100),
          reenviados: Math.floor(Math.random() * 50),
        }));

        setPublicaciones(publicacionesFormateadas);
      })
      .catch((error) => console.error('Error trayendo gatos:', error))
      .finally(() => setCargando(false));
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
  listContent: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});