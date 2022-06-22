import React from 'react';
import {
  View,
  Text,
  Image,
  Keyboard
} from 'react-native';

import addPhoto from '../../assets/AddPhoto.png';

import { Background } from '../../components/Background';
import { BtnGoBack } from '../../components/BtnGoBack';
import { Input } from '../../components/Input';
import { DescCerv } from '../../components/DescCerv';
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

          <View style={styles.areaInclu}>
            <Input
              placeholder="Nome Cerveja"
              returnKeyType="next"
              onSubmitEditing={ () => Keyboard.dismiss()}
              autoCorrect={false}
              autoCapitalize="none"
              // value={email}
              // onChangeText={ (text) => setEmail(text) }
            />

            <DescCerv
              placeholder={"Descrição da Cerveja"}
            />

            <View style={styles.arealine}>
              <Input
                placeholder="Valor"
                returnKeyType="next"
                onSubmitEditing={ () => Keyboard.dismiss()}
                autoCorrect={false}
                autoCapitalize="none"
                // value={email}
                // onChangeText={ (text) => setEmail(text) }              
              />
            </View>
          </View>
        </View>
    </Background>  
  );
}