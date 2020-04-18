import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  CheckBox,
  ScrollView,
} from 'react-native';

import styles from './styles';
export default function Home({navigation}) {

  const [selected, setSelected] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Termos e condições </Text>

      <ScrollView style={styles.card}>
        <Text> Não nos responsabilizamos por qualquer transação feita à partir da interação com os logistas cadastrados.
        </Text>

        { /* Texto teste... */ }
        <Text style={styles.textCard}> 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cumque ab earum exercitationem quia necessitatibus nihil illo, hic voluptatum enim autem doloribus nesciunt omnis, architecto quas itaque dignissimos laborum vero?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis necessitatibus et sequi deserunt dolorum reprehenderit in dolorem molestiae placeat velit quisquam facere, eum voluptates. Alias itaque cum rerum. Distinctio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse blanditiis consectetur a eius libero amet quibusdam cupiditate maiores quia incidunt adipisci mollitia dolores, facilis laboriosam consequatur dolorum quam pariatur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis doloribus quas commodi unde quia ea in non nulla voluptas odit soluta, quis ut repudiandae assumenda sequi? Quis, eaque est!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci eius iure sapiente rem repudiandae beatae voluptatum, at ab optio alias earum. In aspernatur sit, possimus quod rem eveniet expedita?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur fuga autem dolores eos sed incidunt consectetur voluptas, vero labore? Facere asperiores laudantium, explicabo dignissimos earum doloremque! Odio, deserunt dolorem?
        </Text>
      </ScrollView>

      <View style={styles.aside}>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            value={selected}
            onValueChange={setSelected}
          />
          <Text
            style={styles.checkBoxText}
            onPress={()=>{
              setSelected(!selected);
            }}
          >
            Li e aceito todos os termos</Text>
        </View>
        { selected
          ?
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              navigation.navigate('Register');
            }}
          >
            <Text style={styles.textButton}>Continuar</Text>
          </TouchableOpacity>
          :
          <View style={[styles.button, {backgroundColor: "#00968899"}]}>
            <Text style={styles.textButton}>Continuar</Text>
          </View>
        }
      </View>
    </SafeAreaView>
  );
};