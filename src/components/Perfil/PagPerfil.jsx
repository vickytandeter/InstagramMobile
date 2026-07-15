import React, { useMemo } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import InfoPerfil, { PERFIL_HARDCODEADO } from './InfoPerfil';
import Destacadas from './Destacadas';
import ListaPublicaciones from './ListaPublicaciones';
import Header from '../Header';
import Footer from '../Footer';

export default function PagPerfil() {
  const route = useRoute();
  // Si venimos del feed con un usuario tocado, route.params trae sus datos
  // (usuario, fotoUrl, publicacionInicial). Si no hay params, es "mi" perfil.
  const { usuario, fotoUrl, publicacionInicial } = route.params || {};

  const perfil = useMemo(() => {
    if (!usuario) return undefined; // InfoPerfil usa PERFIL_HARDCODEADO por defecto

    // El feed solo nos da usuario y foto: el resto de los datos del perfil
    // no existen todavía, así que se generan acá.
    return {
      usuario,
      nombre: usuario,
      fotoUrl: fotoUrl || PERFIL_HARDCODEADO.fotoUrl,
      handle: 'Perfil de la comunidad 🐾',
      publicaciones: publicacionInicial ? 1 : 0,
      seguidores: Math.floor(Math.random() * 900) + 50,
      seguidos: Math.floor(Math.random() * 500) + 20,
    };
  }, [usuario, fotoUrl, publicacionInicial]);

  return (
    <View style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />
        <InfoPerfil perfil={perfil} />
        <Destacadas />
        <ListaPublicaciones perfil={perfil} publicacionInicial={publicacionInicial} />
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    // Deja lugar abajo para que el Footer (fijo, position absolute) nunca
    // tape la última publicación.
    paddingBottom: 90,
  },
});
