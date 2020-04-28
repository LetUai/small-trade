import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Lottie from 'lottie-react-native';

import shopping from '../../assets/shopping.json';
import styles from './styles';

export default function Intro() {
  return (
    <SafeAreaView style={styles.container}>
      <Lottie
        source={shopping}
        style={styles.anim}
        autoPlay
        resizeMode="contain"
      />
      <Text style={styles.welcome}>Seja bem vindo!</Text>
    
    </SafeAreaView>
  );
};