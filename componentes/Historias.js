import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import historias from '../data/historias';

function Historia({ item }) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={[styles.anillo, item.esPropia && styles.anilloPropio]}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
      </View>
      <Text style={styles.nombre} numberOfLines={1}>
        {item.usuario}
      </Text>
    </TouchableOpacity>
  );
}

export default function Historias() {
  return (
    <FlatList
      data={historias}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => <Historia item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dbdbdb',
  },
  item: {
    alignItems: 'center',
    marginRight: 14,
    width: 68,
  },
  anillo: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  anilloPropio: {
    borderColor: '#ED4956',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  nombre: {
    fontSize: 11,
    color: '#262626',
    marginTop: 4,
    textAlign: 'center',
  },
});