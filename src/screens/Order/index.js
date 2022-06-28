import React from 'react';
import {
  View,
  Text,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity as TO,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import addPhoto from '../../assets/AddPhoto.png';

import { Background } from '../../components/Background';
import { BtnGoBack } from '../../components/BtnGoBack';
import { Input } from '../../components/Input';
import { DescCerv } from '../../components/DescCerv';
import { AreaSwitch } from '../../components/AreaSwitch';
import { Button } from '../../components/Button';
import { styles } from './styles';

export function Order({route}) {
  const navigation = useNavigation();
  const image = route.params?.picture;

  function handleCamera(){
    navigation.navigate('AddCam');
  }

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
            <TO
              style={styles.imgBtn}
              onPress={handleCamera}
            >
              { 
                image != null && image != ''
              ?   
                <Image
                  source={{uri:image}}
                  style={styles.comImage}
                  resizeMode="stretch"
                />
              :                          
                <Image
                  source={addPhoto}
                />
              }
            </TO>            
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