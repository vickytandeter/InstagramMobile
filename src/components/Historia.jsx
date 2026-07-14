import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors";

// Anillo degradado igual al del proyecto original (definido en historia.css),
// implementado con expo-linear-gradient ya que RN no soporta gradientes de borde nativos.

function Historia({ historia, esPropia }) {
  return (
    <TouchableOpacity style={styles.historia} activeOpacity={0.7}>
      {esPropia ? (
        <View style={[styles.anillo, styles.anilloPropio]}>
          <View style={styles.anilloInterno}>
            <Image source={{ uri: historia.fotoPerfil }} style={styles.imagen} />
          </View>
          <View style={styles.badgeAgregar}>
            <Feather name="plus" size={12} color={colors.blanco} />
          </View>
        </View>
      ) : (
        <LinearGradient
          colors={colors.gradienteHistoria}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.anillo}
        >
          <View style={styles.anilloInterno}>
            <Image source={{ uri: historia.fotoPerfil }} style={styles.imagen} />
          </View>
        </LinearGradient>
      )}

      <Text style={styles.nombre} numberOfLines={1}>
        {esPropia ? "Your story" : historia.usuario}
      </Text>
    </TouchableOpacity>
  );
}

const TAMANIO = 62;

const styles = StyleSheet.create({
  historia: {
    alignItems: "center",
    width: 76,
  },
  anillo: {
    width: TAMANIO,
    height: TAMANIO,
    borderRadius: TAMANIO / 2,
    padding: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
  anilloPropio: {
    backgroundColor: colors.borde,
  },
  anilloInterno: {
    width: "100%",
    height: "100%",
    borderRadius: TAMANIO / 2,
    backgroundColor: colors.blanco,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: "100%",
    height: "100%",
    borderRadius: TAMANIO / 2,
  },
  badgeAgregar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.azulNuevaHistoria,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.blanco,
  },
  nombre: {
    marginTop: 4,
    fontSize: 11,
    color: colors.texto,
    maxWidth: 72,
    textAlign: "center",
  },
});

export default Historia;
