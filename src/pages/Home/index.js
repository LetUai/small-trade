import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import Icon from '@expo/vector-icons/Feather';

import styles from './styles';
import api from '../../services/api';

export default function Home({ navigation }) {
  const [publications, setPublications] = useState();
  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp()
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  async function loadPublications() {
    setLoading(false)
    const response = await api.get('commerce/list');
    
    setPublications(response.data);
    setLoading(true);
  }

  useEffect(() => {
    loadPublications();
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
        data={loading ? publications : [{_id: "aa"}, {_id: "bb"}, {_id: "ab"}, {_id: "ba"}]}
        keyExtractor={publication => String(publication._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: publication }) => (
          <View style={styles.publication}>

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
                  <Text style={styles.companyName}>{publication.name}</Text>
                  <Text style={styles.tags}>tags: tags, fixas, provisóriamente</Text>
                </View>
              </ShimmerPlaceHolder>
            </View>

            <ShimmerPlaceHolder
              style={{ flex: 1, height: 60, borderRadius: 5 }}
              autoRun={true}
              visible={loading}
            >
              <Text style={styles.description}>{publication.description}</Text>
            </ShimmerPlaceHolder>
            
            <ShimmerPlaceHolder
              style={{ flex: 1, height: 10, marginTop: 20, borderRadius: 5 }}
              autoRun={true}
              visible={loading}
            >
              <TouchableOpacity
                style={styles.details}
                onPress={() => {
                  navigation.navigate('Details', { publication });
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