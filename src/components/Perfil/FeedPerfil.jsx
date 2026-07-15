import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetallePublicacion from './DetallePublicacion';
import Footer from '../Footer';

export default function FeedPerfil() {
  const navigation = useNavigation();
  const route = useRoute();
  const { publicaciones, publicacionId, usuario, avatarUrl } = route.params;
  const listaRef = useRef(null);

  const indiceInicial = Math.max(
    0,
    publicaciones.findIndex((p) => p.id === publicacionId)
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={10}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitulo}>Publicaciones</Text>
        <View style={styles.espacioHeader} />
      </View>

      <FlatList
        ref={listaRef}
        data={publicaciones}
        keyExtractor={(item) => item.id}
        initialScrollIndex={indiceInicial > 0 ? indiceInicial : undefined}
        onScrollToIndexFailed={({ index }) => {
          setTimeout(() => {
            listaRef.current?.scrollToIndex({ index, animated: false });
          }, 250);
        }}
        style={styles.lista}
        contentContainerStyle={styles.listaContenido}
        renderItem={({ item }) => (
          <DetallePublicacion publicacion={item} usuario={usuario} avatarUrl={avatarUrl} />
        )}
      />

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  headerTitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  espacioHeader: {
    width: 26,
  },
  lista: {
    flex: 1,
  },
  listaContenido: {
    // Deja lugar abajo para que el Footer (fijo, position absolute) nunca
    // tape la última publicación.
    paddingBottom: 90,
  },
});
