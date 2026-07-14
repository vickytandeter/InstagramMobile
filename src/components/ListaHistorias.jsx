import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Historia from "./Historia";
import colors from "../theme/colors";

function ListaHistorias({ historias, fotoPerfilPropia }) {
  // Historia "propia" siempre primero, igual que en la app real
  const propia = { id: "propia", fotoPerfil: fotoPerfilPropia };

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={historias}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={<Historia historia={propia} esPropia />}
        renderItem={({ item }) => <Historia historia={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.fondo,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borde,
    paddingVertical: 10,
  },
  lista: {
    paddingHorizontal: 12,
    gap: 4,
  },
});

export default ListaHistorias;
