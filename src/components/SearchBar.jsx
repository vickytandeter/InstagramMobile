import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (texto) => {
    setInput(texto);
    if (onSearch) onSearch(texto);
  };

  return (
    <View style={styles.contenedor}>
      <Feather name="search" size={16} color={colors.textoSecundario} />
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        placeholderTextColor={colors.textoSecundario}
        value={input}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 36,
    gap: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.texto,
    padding: 0,
  },
});

export default SearchBar;
