import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
  ToastAndroid,
} from 'react-native';

import styles from './styles';

export default function Register({ navigation }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirmPassword] = useState();

  const toastMessage = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }

  BackHandler.addEventListener(
    "hardwareBackPress",
    () => {

      toastMessage("Toque novamente para sair");

      return true;
    }
  );

  const buttonEnabled = () => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('Warning', {user: {name, email, password}});
        setPassword(null);
        setConfirmPassword(null);
      }}
    >
      <Text style={styles.textButton}>Criar conta</Text>
    </TouchableOpacity>
  );

  const buttonDisabled = () => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#00968899" }]}
      onPress={()=>{}}
    >
      <Text style={styles.textButton}>Criar conta</Text>
    </TouchableOpacity>
  );

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
          value={name}
          onChangeText={setName}
        />

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
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirme sua senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          returnKeyType="done"
          value={confirm}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => { navigation.navigate('Login') }}
        >Já tenho uma conta</Text>

        {(password === confirm && email && name && password)
          ? buttonEnabled() : buttonDisabled()
        }

      </View>
    </SafeAreaView>
  );
}
