import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native'

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@STAuth:user');

      if(storagedUser) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorageData();
  })

  async function signIn(email, password) {
    try {
      const response = await api.post("auth/login", {email, password});

      if(response.data[0]) {
        setUser(response.data[0]);
        await AsyncStorage.setItem('@STAuth:user', JSON.stringify(response.data[0]))
      }
      else
        alert("Email ou senha incorretos, tente novamente");

    } catch {
      alert("Ocorreu um erro inesperado, tente novamente mais tarde");
    }
  }

  function signOut() {
    setUser(null)
  }

  return(
    <AuthContext.Provider value={{signed: !!user, loading, signIn, signOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;