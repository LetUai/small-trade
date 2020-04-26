import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import Icon from '@expo/vector-icons/Feather';

import styles from './styles';

export default function Map({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  
  useEffect(() => {
    async function initialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    initialPosition();
  }, []);

  if(!currentRegion) {
    return null;
  }

  const trades = [
    {"_id":"5e83ff309460a90023a29ea3","name":"Cantina da Tia Ana","description":" Vendemos drogas letais, e azeitonas","phone":"123123123123","latitude":currentRegion.latitude-0.001, "longitude": currentRegion.longitude-0.002},
    {"_id":"5e84012a1e70e75a4a9948a4","name":"Cantina da Tia Ana","description":" Vendemos Ovo em Conserva, testado positivo para cancer, aids e corona","phone":"123123123123","latitude":currentRegion.latitude-0.01, "longitude": currentRegion.longitude+0.01},
    {"_id":"5e8401411e70e75a4a9948a6","name":"Cantina da Tia Ana","description":" Vendemos Ovo em Conserva, testado positivo para cancer, aids e corona","phone":"123123123123","latitude":currentRegion.latitude+0.01, "longitude": currentRegion.longitude-0.01},
    {"_id":"5e8409ebe2d4de00237239d0","name":"Budega do Titio Avô","description":"Pizza de ontem e maconha no palito","phone":"123123123123","latitude":currentRegion.latitude+0.02, "longitude": currentRegion.longitude+0.002}
  ];

  return (
    <MapView
      initialRegion={currentRegion}
      style={styles.map}
    >
      <Marker
        coordinate={{
          latitude: currentRegion.latitude,
          longitude: currentRegion.longitude
        }}
      >
        <Icon name="map-pin" color="#009688" size={26} />
        <Text>Eu</Text>
      </Marker>

      {trades.map(trade => (
        <Marker
          key={trade._id}
          coordinate={{
            latitude: trade.latitude-0.01,
            longitude: trade.longitude
          }}
        >
          <Image
            style={styles.marker}
            source={{ uri: "https://avatars3.githubusercontent.com/u/61890572?s=200&v=4" }}
          />

          <Callout onPress={() => {
            navigation.navigate("Details", { publication: trade })
          }}>
            <View style={styles.callout}>
              <Text style={styles.name}>{trade.name}</Text>
              <Text style={styles.description}>{trade.description}</Text>
            </View>
          </Callout>
        </Marker>
      ))}

    </MapView>
  );
}