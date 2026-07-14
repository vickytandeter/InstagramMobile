import React from "react";
import { FlatList } from "react-native";
import Publicacion from "./Publicacion";

function Feed({ publicaciones, onSelect, refreshing, onRefresh, ListHeaderComponent }) {
  return (
    <FlatList
      data={publicaciones}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Publicacion post={item} onSelect={onSelect} />}
      ListHeaderComponent={ListHeaderComponent}
      refreshing={refreshing}
      onRefresh={onRefresh}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default Feed;
