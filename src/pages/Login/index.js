import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AuthContext from '../../contexts/auth';
import styles from './styles';

export default function Login({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSingIn() {
    if(!email || !password)
      alert("Por favor preencha todos os campos")

    else
      signIn(email, password);
  }

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
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          returnKeyType="done"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => navigation.goBack()}
        >Ainda não tenho uma conta</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSingIn}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
