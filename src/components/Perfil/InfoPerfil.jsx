import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Se exporta para que otras pantallas (como el feed) puedan usar el mismo
// usuario/avatar sin repetir los datos hardcodeados en dos lugares.
export const PERFIL_HARDCODEADO = {
  usuario: 'vickytandeter',
  nombre: 'vicky',
  fotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80',
  handle: 'amante de los gatos',
  publicaciones: 1,
  seguidores: 453,
  seguidos: 656,
};

export default function InfoPerfil({ perfil = PERFIL_HARDCODEADO }) {
  return (
    <View style={styles.contenedor}>

      {/* Avatar + nombre + estadísticas */}
      <View style={styles.filaPerfil}>
        <View style={styles.avatarContenedor}>

          <View style={styles.anilloHistoria}>
            <Image source={{ uri: perfil.fotoUrl }} style={styles.avatar} />
          </View>

          <TouchableOpacity style={styles.botonMas} activeOpacity={0.7}>
            <Ionicons name="add" size={16} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoDerecha}>
          <Text style={styles.nombre}>{perfil.nombre}</Text>

          <View style={styles.estadisticas}>
            <View style={styles.estadisticaItem}>
              <Text style={styles.estadisticaNumero}>{perfil.publicaciones}</Text>
              <Text style={styles.estadisticaLabel}>publicaciones</Text>
            </View>
            <View style={styles.estadisticaItem}>
              <Text style={styles.estadisticaNumero}>{perfil.seguidores}</Text>
              <Text style={styles.estadisticaLabel}>seguidores</Text>
            </View>
            <View style={styles.estadisticaItem}>
              <Text style={styles.estadisticaNumero}>{perfil.seguidos}</Text>
              <Text style={styles.estadisticaLabel}>seguidos</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Handle */}
      <Text style={styles.handle}>{perfil.handle}</Text>

      {/* Botones de acción */}
      <View style={styles.botonesFila}>
        <TouchableOpacity style={styles.botonAccion} activeOpacity={0.7}>
          <Text style={styles.botonAccionTexto}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonAccion} activeOpacity={0.7}>
          <Text style={styles.botonAccionTexto}>Compartir perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonIcono} activeOpacity={0.7}>
          <Ionicons name="person-add-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const AVATAR_TAMANIO = 88;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  filaPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  avatarContenedor: {
    width: AVATAR_TAMANIO + 12,
    alignItems: 'center',
  },
  anilloHistoria: {
    width: AVATAR_TAMANIO,
    height: AVATAR_TAMANIO,
    borderRadius: AVATAR_TAMANIO / 2,
    borderWidth: 2,
    borderColor: '#555',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: (AVATAR_TAMANIO - 4) / 2,
  },
  botonMas: {
    position: 'absolute',
    bottom: 0,
    right: 6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoDerecha: {
    flex: 1,
    marginLeft: 12,
  },
  nombre: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  estadisticas: {
    flexDirection: 'row',
  },
  estadisticaItem: {
    alignItems: 'center',
    flex: 1,
  },
  estadisticaNumero: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  estadisticaLabel: {
    color: '#a8a8a8',
    fontSize: 13,
    marginTop: 2,
  },
  handle: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 12,
  },
  botonesFila: {
    flexDirection: 'row',
    marginTop: 14,
    marginBottom: 4,
  },
  botonAccion: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    marginRight: 6,
  },
  botonAccionTexto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  botonIcono: {
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
