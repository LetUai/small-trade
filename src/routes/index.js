import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth';

export default function  Routes() {
  const { signed, loading } = useContext(AuthContext);

  
  if (loading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <ActivityIndicator
          size='large'
          color="#009688"
        />
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}