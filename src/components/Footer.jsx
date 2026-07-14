import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// Importación correcta y 100% compatible con Expo (Web, Android e iOS)
import { Feather } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        
        {/* Botón Home / Feed */}
        <TouchableOpacity 
          style={styles.footerButton} 
          onPress={() => navigation?.navigate('Feed')}
          activeOpacity={0.7}
        >
          <Feather name="home" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Botón Reels (Play) */}
        <TouchableOpacity style={styles.footerButton} activeOpacity={0.7}>
          <Feather name="play-circle" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Botón Publicar (Triángulo/Send) */}
        <TouchableOpacity style={styles.footerButton} activeOpacity={0.7}>
          <Feather name="send" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Botón Buscar (Lupa) */}
        <TouchableOpacity style={styles.footerButton} activeOpacity={0.7}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Botón Perfil con foto */}
        <TouchableOpacity 
          style={styles.footerButton} 
          onPress={() => navigation?.navigate('Perfil')}
          activeOpacity={0.7}
        >
          <View style={styles.profileAvatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }} 
              style={styles.profileAvatarImg}
            />
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#262626',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 450,
    alignSelf: 'center',
    width: '100%',
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#ffffff',
    overflow: 'hidden',
  },
  profileAvatarImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Footer;