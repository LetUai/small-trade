import React from 'react';
import {
  SafeAreaView,
} from 'react-native';


import styles from './styles';

import { Card, Text, Button, Divider } from 'react-native-elements';
export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <Card  containerStyle={styles.card}>
      <Divider/>
        <Text h1 h1Style={styles.h1Style}> Aviso! </Text>
        <Divider/>
        <Text h4 h4Style={styles.h4Style}> Não nos responsabilizamos por qualquer transação feita
         à partir da interação com os logistas cadastrados. 
         </Text>
         <Button  containerStyle={styles.button} title="concordar"/>
      </Card>
    </SafeAreaView>
  );
};