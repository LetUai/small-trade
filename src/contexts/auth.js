import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native'

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@STAuth:user');

      if(storagedUser)
        setUser(JSON.parse(storagedUser));
      
      setLoading(false);
    }

    loadStorageData();
  })

  function CustomAlert(message) {
    Alert.alert("Atenção!", message);
  }

  async function signIn(email, password) {
    try {
      const response = await api.post("auth/login", {email, password});

      if(response.data[0]) {
        setUser(response.data[0]);
        await AsyncStorage.setItem('@STAuth:user', JSON.stringify(response.data[0]))
      }
      else {
        if(response.data.status.code === 'auth/invalid-email') {

          

         CustomAlert("O formato de email informado não é válido, tente novamente");
        } else if(response.data.status.code === 'auth/user-not-found' || response.data.status.code === 'auth/wrong-password') {
          CustomAlert("Email ou senha incorretos, tente novamente");
        }
        console.log(response.data.status.code);
      }
    } catch {
      CustomAlert("Ocorreu um erro inesperado, tente novamente mais tarde");
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem('@STAuth:user');
    setUser(null)
  }

  return(
    <AuthContext.Provider value={{signed: !!user, loading, signIn, signOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}