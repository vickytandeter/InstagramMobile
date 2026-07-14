import { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import FeedItem from './FeedItem';
import mockAuthors from '../InstagramMobile/data/mockAuthors';

// Sacá tu propia key gratis en https://thecatapi.com/signup
// Con "DEMO-API-KEY" también funciona, pero con límite de requests más bajo.
const CAT_API_KEY = 'DEMO-API-KEY';

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(
          'https://api.thecatapi.com/v1/images/search',
          {
            params: { limit: mockAuthors.length },
            headers: { 'x-api-key': CAT_API_KEY },
          }
        );

        // Combinamos cada imagen real con un autor simulado
        const merged = response.data.map((cat, index) => ({
          id: cat.id,
          image: cat.url,
          ...mockAuthors[index],
        }));

        setPosts(merged);
      } catch (error) {
        console.error('Error trayendo gatos de la API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Barra de navegación superior */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.topIcons}>
          <Ionicons
            name="heart-outline"
            size={26}
            color="#262626"
            style={{ marginRight: 16 }}
          />
          <Ionicons name="paper-plane-outline" size={24} color="#262626" />
        </View>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#262626" />
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FeedItem
              username={item.username}
              avatar={item.avatar}
              location={item.location}
              image={item.image}
              likes={item.likes}
              caption={item.caption}
              timestamp={item.timestamp}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dbdbdb',
  },
  logo: {
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#262626',
  },
  topIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});