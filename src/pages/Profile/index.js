import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import Icon from '@expo/vector-icons/Feather';

import api from '../../services/api';

import styles from './styles';

export default function Profile({ navigation }) {
  const [favorites, setFavorites] = useState();
  const [loading, setLoading] = useState(false);

  async function loadFavorites() {
    setLoading(false)
    const response = await api.get('commerce/list');
    
    setFavorites(response.data);
    setLoading(true);
  }

  useEffect(() => {
    loadFavorites();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={()=>{
            navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        >
          <Icon name="menu" color="#000" size={25}/>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <ShimmerPlaceHolder
            style={styles.imgProfile}
            autoRun={true}
            visible={true}
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
            visible={true}
          >
              <Text style={styles.name}>Seu Nome</Text>
          </ShimmerPlaceHolder>
        </View>

        <ShimmerPlaceHolder
          style={{ flex: 1, height: 60, borderRadius: 5 }}
          autoRun={true}
          visible={true}
        >
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corporis sequi doloribus ullam accusantium adipisci nemo deserunt illum cupiditate commodi, qui delectus, ipsa quia! Labore explicabo aspernatur doloremque blanditiis molestiae.</Text>
        </ShimmerPlaceHolder>
      </View>
      
      <View style={styles.content}>
          <Text style={styles.favTitle}>Favoritos</Text>

          <FlatList
            data={favorites}
            numColumns={2}
            keyExtractor={fav => String(fav._id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: fav }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                  navigation.navigate('Details', { publication: fav });
                }}
              >
                <ShimmerPlaceHolder
                  style={{
                    width: 100,
                    borderRadius: 5,
                  }}
                  autoRun={true}
                  visible={loading}
                >
                  <View>
                    <Text>{fav.name}</Text>
                  </View>
                </ShimmerPlaceHolder>
              </TouchableOpacity>
            )}
          />
      </View>
    </View>
  );
}
