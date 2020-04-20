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
import Icon from '@expo/vector-icons/Feather';

import styles from './styles';
import api from '../../services/api';

export default function Home({ navigation }) {
  const [publications, setPublications] = useState([]);

  const [search, setSearch] = useState('');

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
    const response = await api.get('commerce/list');
    setPublications(response.data)
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
        data={publications}
        style={styles.list}
        keyExtractor={publication => String(publication._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: publication }) => (
          <View style={styles.publication}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.imgProfile}
                resizeMode="contain"
                source={{uri: 'https://avatars3.githubusercontent.com/u/61890572?s=200&v=4'}}
              />
              <View>
                <Text style={styles.companyName}>{publication.name}</Text>
                <Text style={styles.tags}>tags: tags, fixas, provisóriamente</Text>
              </View>
            </View>

            <Text style={styles.description}>{publication.description}</Text>
            
            <TouchableOpacity
              style={styles.details}
              onPress={() => {
                navigation.navigate('Details', { publication });
              }}
            >
              <Text style={styles.detailsText}>Ver mais detalhes</Text>
              <Icon name="arrow-right" size={16} color="#009688" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};