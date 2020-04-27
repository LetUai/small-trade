import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default function Details() {
  const route = useRoute();
  const trade = route.params.trade;

  return (
    <View style={styles.container}>
      <Text style={styles.property}>Nome:</Text>
      <Text>{trade.commerceName}</Text>
      <Text style={styles.property}>Descrição:</Text>
      <Text>{trade.description}</Text>
      <Text style={styles.property}>Contato:</Text>
      <Text>{trade.phone}</Text>
    </View>
  );
}
