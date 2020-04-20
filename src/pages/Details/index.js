import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default function Details() {
  const route = useRoute();
  const publication = route.params.publication;

  return (
    <View style={styles.container}>
      <Text style={styles.property}>Nome:</Text>
      <Text>{publication.name}</Text>
      <Text style={styles.property}>Descrição:</Text>
      <Text>{publication.description}</Text>
      <Text style={styles.property}>Contato:</Text>
      <Text>{publication.phone}</Text>
    </View>
  );
}
