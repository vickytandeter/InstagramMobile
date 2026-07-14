import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="camera-outline" size={26} color="#262626" />
      </TouchableOpacity>

      <Text style={styles.logo}>Instagram</Text>

      <TouchableOpacity>
        <Ionicons name="add-circle-outline" size={28} color="#262626" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#262626',
  },
});