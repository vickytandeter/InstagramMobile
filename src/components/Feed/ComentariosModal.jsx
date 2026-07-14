import { useState } from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import comentariosMock from '../../data/comentarios';

export default function ComentariosModal({ visible, onClose }) {
  const [comentarios, setComentarios] = useState(comentariosMock);
  const [texto, setTexto] = useState('');

  const publicarComentario = () => {
    if (texto.trim() === '') return;
    const nuevo = {
      id: Date.now().toString(),
      usuario: 'vos',
      avatar: 'https://i.pravatar.cc/100?img=11',
      texto,
    };
    setComentarios((prev) => [...prev, nuevo]);
    setTexto('');
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.fondo} activeOpacity={1} onPress={onClose} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.hoja}
      >
        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Comentarios</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={comentarios}
          keyExtractor={(item) => item.id}
          style={styles.lista}
          renderItem={({ item }) => (
            <View style={styles.comentario}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.textoContainer}>
                <Text style={styles.usuario}>
                  {item.usuario} <Text style={styles.texto}>{item.texto}</Text>
                </Text>
              </View>
            </View>
          )}
        />

        <View style={styles.inputRow}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=11' }}
            style={styles.avatarInput}
          />
          <TextInput
            style={styles.input}
            placeholder="Agregá un comentario..."
            placeholderTextColor="#8e8e8e"
            value={texto}
            onChangeText={setTexto}
          />
          <TouchableOpacity onPress={publicarComentario} disabled={texto.trim() === ''}>
            <Text
              style={[
                styles.publicar,
                texto.trim() === '' && styles.publicarDisabled,
              ]}
            >
              Publicar
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  hoja: {
    height: '65%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#262626',
  },
  titulo: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },
  lista: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  comentario: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  textoContainer: {
    flex: 1,
  },
  usuario: {
    fontWeight: '600',
    fontSize: 13,
    color: '#fff',
  },
  texto: {
    fontWeight: '400',
    color: '#f5f5f5',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#262626',
  },
  avatarInput: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: '#fff',
  },
  publicar: {
    color: '#0095F6',
    fontWeight: '600',
    fontSize: 13,
  },
  publicarDisabled: {
    color: '#2a4a5f',
  },
});