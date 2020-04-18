import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler
} from 'react-native';

import styles from './styles';

export default function Register({ navigation }) {

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
      <View style={styles.header}>
        <Text style={styles.title}>Crie sua conta</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input}></TextInput>

        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input}></TextInput>

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input}></TextInput>

        <Text style={styles.label}>Confirme sua senha:</Text>
        <TextInput style={styles.input}></TextInput>

        <Text
          style={styles.link}
          onPress={() => { navigation.navigate('Login') }}
        >Já tenho uma conta</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate('Home') }}
        >
          <Text style={styles.textButton}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
