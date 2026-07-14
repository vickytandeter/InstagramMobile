import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors";

function Usuario({ fotoPerfil }) {
  return (
    <View style={styles.usuario}>
      <Image source={{ uri: fotoPerfil }} style={styles.imagen} />

      <View style={styles.nombreFila}>
        <Text style={styles.nombre}>usuario</Text>
        <Feather name="check-circle" size={16} color="#3897f0" />
      </View>

      <Text style={styles.arroba}>@usuario</Text>

      <View style={styles.numeros}>
        <View style={styles.numeroBox}>
          <Feather name="users" size={16} color={colors.texto} />
          <Text style={styles.numeroTexto}>121K</Text>
        </View>
        <View style={styles.numeroBox}>
          <Feather name="heart" size={16} color={colors.texto} />
          <Text style={styles.numeroTexto}>900K</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  usuario: {
    alignItems: "center",
    paddingVertical: 24,
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff2d78",
    marginBottom: 14,
  },
  nombreFila: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.texto,
  },
  arroba: {
    color: colors.textoSecundario,
    marginTop: 2,
    fontSize: 14,
  },
  numeros: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
  },
  numeroBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  numeroTexto: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.texto,
  },
});

export default Usuario;
