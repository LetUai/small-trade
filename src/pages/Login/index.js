import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entre com seu email</Text>
      </View>

      <Text style={styles.label}>E-mail:</Text>
      <TextInput style={styles.input}></TextInput>

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input}></TextInput>

      <Text
        style={styles.link}
        onPress={() => {navigation.navigate('Register')}}
      >Ainda não tenho uma conta</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={()=> {navigation.navigate('Home')}}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
