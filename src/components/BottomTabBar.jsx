import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors";

// En la version web, la navegacion (BarraLateral / MenuLateral) vive fija a la
// izquierda de la pantalla. En mobile ese mismo rol de navegacion global lo cumple
// una barra de tabs inferior, por eso se traduce a este componente equivalente.

function BottomTabBar({ activo = "home", fotoPerfil, onCambiarTab }) {
  const tabs = [
    { key: "home", icon: "home" },
    { key: "explorar", icon: "compass" },
    { key: "reels", icon: "film" },
    { key: "notificaciones", icon: "heart" },
  ];

  return (
    <View style={styles.contenedor}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.boton}
          onPress={() => onCambiarTab && onCambiarTab(tab.key)}
        >
          <Feather
            name={tab.icon}
            size={26}
            color={activo === tab.key ? colors.texto : colors.textoSecundario}
          />
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.boton}
        onPress={() => onCambiarTab && onCambiarTab("perfil")}
      >
        <Image
          source={{ uri: fotoPerfil }}
          style={[
            styles.avatar,
            activo === "perfil" && styles.avatarActivo,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.fondo,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.borde,
  },
  boton: {
    padding: 6,
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  avatarActivo: {
    borderWidth: 2,
    borderColor: colors.texto,
  },
});

export default BottomTabBar;
