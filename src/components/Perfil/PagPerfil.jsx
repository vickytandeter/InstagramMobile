import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';

import InfoPerfil from './InfoPerfil';
import Destacadas from './Destacadas';
import ListaPublicaciones from './ListaPublicaciones';

export default function PagPerfil() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoPerfil />
        <Destacadas />
        <ListaPublicaciones />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
});
