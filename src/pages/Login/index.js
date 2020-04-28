import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import { useAuth } from '../../contexts/auth';
import styles from './styles';

export default function Login({ navigation }) {
  const { signIn } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  BackHandler.addEventListener(
    "hardwareBackPress",
    () => {
      navigation.navigate('Register');
      return true;
    }
  );

  function handleSingIn() {
    if(!email || !password)
      alert("Por favor preencha todos os campos")

    else
      signIn(email, password);
  }

  const buttonEnabled = () => (
    <TouchableOpacity
      style={styles.button}
      onPress={handleSingIn}
    >
      <Text style={styles.textButton}>Entrar</Text>
    </TouchableOpacity>
  );

  const buttonDisabled = () => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#00968899" }]}
      onPress={()=>{}}
    >
      <Text style={styles.textButton}>Entrar</Text>
    </TouchableOpacity>
  );

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
          onPress={() => navigation.navigate('Register')}
        >Ainda não tenho uma conta</Text>

        {(email && password)
          ? buttonEnabled() : buttonDisabled()
        }

      </View>
    </SafeAreaView>
  );
}
