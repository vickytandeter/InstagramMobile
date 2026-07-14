import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { getFeed } from "./src/services/api";

import Header from "./src/components/Header";
import ListaHistorias from "./src/components/ListaHistorias";
import Feed from "./src/components/Feed";
import DetallePublicacion from "./src/components/DetallePublicacion";
import BottomTabBar from "./src/components/BottomTabBar";
import Usuario from "./src/components/Usuario";

const FOTO_PERFIL_PROPIA = "https://i.pravatar.cc/100?img=47";

export default function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [postSeleccionado, setPostSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [tabActiva, setTabActiva] = useState("home");

  const cargarFeed = useCallback(() => {
    setCargando(true);
    getFeed()
      .then(setPublicaciones)
      .finally(() => setCargando(false));
  }, []);

  // Mismo flujo que el useEffect del App.jsx original: se piden las
  // publicaciones a la API apenas se monta el componente.
  // useEffect(() => {
  //   cargarFeed();
  // }, [cargarFeed]);

  if (tabActiva === "perfil") {
    return (
      <SafeAreaView style={styles.contenedor}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.fondo} />
        <Header />
        <Usuario fotoPerfil={FOTO_PERFIL_PROPIA} />
        <BottomTabBar
          activo={tabActiva}
          fotoPerfil={FOTO_PERFIL_PROPIA}
          onCambiarTab={setTabActiva}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.fondo} />

      <Header />

      <Feed
        publicaciones={publicaciones}
        onSelect={setPostSeleccionado}
        refreshing={cargando}
        onRefresh={cargarFeed}
        ListHeaderComponent={
          <ListaHistorias
            historias={publicaciones}
            fotoPerfilPropia={FOTO_PERFIL_PROPIA}
          />
        }
      />

      <DetallePublicacion
        post={postSeleccionado}
        onVolver={() => setPostSeleccionado(null)}
      />

      <BottomTabBar
        activo={tabActiva}
        fotoPerfil={FOTO_PERFIL_PROPIA}
        onCambiarTab={setTabActiva}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
});
