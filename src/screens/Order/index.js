import React from 'react';
import {
  View,
  Text,
  Image,
  Keyboard,
  TextInput
} from 'react-native';

import addPhoto from '../../assets/AddPhoto.png';

import { Background } from '../../components/Background';
import { BtnGoBack } from '../../components/BtnGoBack';
import { Input } from '../../components/Input';
import { DescCerv } from '../../components/DescCerv';
import { AreaSwitch } from '../../components/AreaSwitch';
import { Button } from '../../components/Button';
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
              <TextInput
                style={styles.inputValor}
                returnKeyType="next"
                onSubmitEditing={ () => Keyboard.dismiss()}
                autoCorrect={false}
                autoCapitalize="none"
                placeholderTextColor="#CCDE3F"
                placeholder="Valor"
                // value={email}
                // onChangeText={ (text) => setEmail(text) }              
              />

              <AreaSwitch/>
            </View>

            <Button
              // onPress={(handleInclu)}
              title={"Cadastrar Cerveja"}
              activeOpacity={0.7}
            />
          </View>
        </View>
    </Background>  
  );
}