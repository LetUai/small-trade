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
      <Text style={styles.title}>Entre com seu email</Text>

      <View>
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
          returnKeyType="done"
        />
      </View>

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => navigation.goBack()}
        >Ainda não tenho uma conta</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={()=> {navigation.navigate('Home')}}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
