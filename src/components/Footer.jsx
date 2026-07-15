import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { PERFIL_HARDCODEADO } from './Perfil/InfoPerfil';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        
        <TouchableOpacity 
          style={styles.footerButton} 
          onPress={() => navigation?.navigate('Feed')}
          activeOpacity={0.7}
        >
          <Feather name="home" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} activeOpacity={0.7}>
          <Feather name="play-circle" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} activeOpacity={0.7}>
          <Feather name="send" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} activeOpacity={0.7}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.footerButton} 
          onPress={() => navigation?.navigate('Perfil')}
          activeOpacity={0.7}
        >
          <View style={styles.profileAvatarContainer}>
            <Image
              source={{ uri: PERFIL_HARDCODEADO.fotoUrl }}
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