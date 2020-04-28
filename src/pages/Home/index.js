import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import Icon from '@expo/vector-icons/Feather';

import styles from './styles';
import api from '../../services/api';

export default function Home({ navigation }) {
  const [trades, setTrades] = useState();
  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(false);

  async function loadTrades() {
    setLoading(false)
    const response = await api.get('auth/commerce/list');
    
    setTrades(response.data);
    setLoading(true);
  }

  useEffect(() => {
    loadTrades();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer} >
        <Icon name="search" color="#000" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.search}
          placeholder="Pesquisar..."
          autoCapitalize="words"
          autoCorrect={true}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      
      <FlatList
        // condicional pra sempre ter componentes disponível pra aplicar o Shimmer Effect mesmo enquanto a requisição ainda está sendo feita:
        data={loading ? trades : [{_id: "aa"}, {_id: "bb"}, {_id: "ab"}, {_id: "ba"}]}
        keyExtractor={trade => String(trade._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: trade }) => (
          <View key={trade._id} style={styles.trade}>

            <View style={styles.profileContainer}>
              <ShimmerPlaceHolder
                style={styles.imgProfile}
                autoRun={true}
                visible={loading}
              >
                <Image
                  style={styles.imgProfile}
                  resizeMode="contain"
                  source={{uri: 'https://avatars3.githubusercontent.com/u/61890572?s=200&v=4'}}
                />
              </ShimmerPlaceHolder>

              <ShimmerPlaceHolder
                style={{ flex: 1, height: 46, borderRadius: 5 }}
                autoRun={true}
                visible={loading}
              >
                <View>
                  <Text style={styles.companyName}>{trade.commerceName}</Text>
                  <Text style={styles.tags}>tags: {loading? trade.tags.join(', '): " "}</Text>
                </View>
              </ShimmerPlaceHolder>
            </View>

            <ShimmerPlaceHolder
              style={{ flex: 1, height: 60, borderRadius: 5 }}
              autoRun={true}
              visible={loading}
            >
              <Text style={styles.description}>{trade.description}</Text>
            </ShimmerPlaceHolder>
            
            <ShimmerPlaceHolder
              style={{ flex: 1, height: 10, marginTop: 20, borderRadius: 5 }}
              autoRun={true}
              visible={loading}
            >
              <TouchableOpacity
                style={styles.details}
                onPress={() => {
                  navigation.navigate('Details', { trade });
                }}
              >
                <Text style={styles.detailsText}>Ver mais detalhes</Text>
                <Icon name="arrow-right" size={16} color="#009688" />
              </TouchableOpacity>
            </ShimmerPlaceHolder>
          </View>
        )}
      />
    </View>
  );
};