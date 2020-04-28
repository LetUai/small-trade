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

      <View>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="words"
          returnKeyType="next"
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          returnKeyType="next"
        />

        <Text style={styles.label}>Confirme sua senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          returnKeyType="done"
        />
      </View>

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => { navigation.navigate('Login') }}
        >Já tenho uma conta</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate('Warning') }}
        >
          <Text style={styles.textButton}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
