import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../contexts/auth';

import Intro from '../components/Intro';

export default function  Routes() {
  const { signed, loading } = useAuth();
  
  if (loading) {
    return(
      <Intro />
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}