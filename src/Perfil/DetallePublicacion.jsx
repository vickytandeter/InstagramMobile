import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const ANCHO_TARJETA = width * 0.88;

/**
 * Ventana emergente (modal) con el detalle de una publicación.
 * Se navega a esta pantalla con:
 *   navigation.navigate('DetallePublicacion', { publicacion })
 * y en el Stack.Navigator tiene que estar configurada con
 * options={{ presentation: 'transparentModal' }} para que aparezca
 * como un popup sobre el fondo en vez de una pantalla nueva.
 */
export default function DetallePublicacion() {
  const navigation = useNavigation();
  const route = useRoute();
  const { publicacion } = route.params;

  const cerrar = () => navigation.goBack();

  return (
    <TouchableWithoutFeedback onPress={cerrar}>
      <View style={styles.fondo}>
        <TouchableWithoutFeedback>
          <View style={styles.tarjeta}>
            <TouchableOpacity style={styles.botonCerrar} onPress={cerrar} hitSlop={10}>
              <Ionicons name="close" size={22} color="#fff" />
            </TouchableOpacity>

            <Image source={{ uri: publicacion.imageUrl }} style={styles.imagen} />

            <View style={styles.acciones}>
              <Ionicons name="heart-outline" size={24} color="#fff" style={styles.icono} />
              <Ionicons name="chatbubble-outline" size={22} color="#fff" style={styles.icono} />
              <Ionicons name="paper-plane-outline" size={22} color="#fff" style={styles.icono} />
            </View>

            <Text style={styles.likes}>{publicacion.likes ?? 0} me gusta</Text>

            {publicacion.descripcion ? (
              <Text style={styles.descripcion}>{publicacion.descripcion}</Text>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjeta: {
    width: ANCHO_TARJETA,
    backgroundColor: '#000',
    borderRadius: 14,
    overflow: 'hidden',
    paddingBottom: 14,
  },
  botonCerrar: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 14,
    padding: 4,
  },
  imagen: {
    width: '100%',
    height: ANCHO_TARJETA,
    backgroundColor: '#1a1a1a',
  },
  acciones: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  icono: {
    marginRight: 14,
  },
  likes: {
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 12,
    marginTop: 8,
  },
  descripcion: {
    color: '#fff',
    paddingHorizontal: 12,
    marginTop: 6,
  },
});
