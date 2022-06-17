import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import addPhoto from '../../assets/AddPhoto.png';

import { Background } from '../../components/Background';
import { BtnGoBack } from '../../components/BtnGoBack';
import { styles } from './styles';

export function Order() {


  return (
    <Background>
        <View style={styles.container}>
          <View style={styles.lineHeader}>
            <BtnGoBack/>

            <Text style={styles.title}>
              Cadastrar
            </Text>

          </View>
            <View style={styles.formatImg}>
              <Image
                source={addPhoto}
              />
            </View>
        </View>
    </Background>  
  );
}