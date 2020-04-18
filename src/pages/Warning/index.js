import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  CheckBox,

} from 'react-native';

import styles from './styles';
export default function Home({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}> Aviso! </Text>

        <Text style={styles.h4Style}> Não nos responsabilizamos por qualquer transação feita
         à partir da interação com os logistas cadastrados. 
        </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{
            navigation.navigate('Intro');
          }}
        >
          <Text>concordar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};