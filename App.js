import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Feed from './componentes/Feed';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Feed onSelect={(post) => console.log('Post seleccionado:', post.id)} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
});