import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  BackHandler,
} from 'react-native';

import styles from './styles';

export default function Home() {

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

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};