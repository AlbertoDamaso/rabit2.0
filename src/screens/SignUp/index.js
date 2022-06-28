import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Keyboard,
  Image,
  TouchableOpacity as TO,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import addPhotoProfile from '../../assets/AddPhotoProfile.png';
import { Input } from '../../components/Input';
import { MaskInput } from '../../components/MaskInput';
import { Button } from '../../components/Button';

import { styles } from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth'; 


export function SignUp({route}) {
  const navigation = useNavigation();

  const [zap, setZap] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const image = route.params?.picture;

  const { signUp } = useContext(AuthContext);
  
  function handleCamera(){
    navigation.navigate('AddCamSignUp');
  }

  function handleSignUp(){
    signUp(email, password, name, zap, image);
  }

  function handleSignIn(){
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
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
              resizeMode="cover"
            />
          :                          
            <Image
              source={addPhotoProfile}
            />
          }
        </TO>            
      </View>      
      
      <View style={styles.areaInput}>
        <Input
          placeholder="Nome"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss()}
          autoCorrect={false}
          autoCapitalize="none"
          value={name}
          onChangeText={ (text) => setName(text) }
        />
        <MaskInput
          placeholder="WhatsApp"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss()}
          autoCorrect={false}
          autoCapitalize="none"
          value={zap}
          onChangeText={ (text) => setZap(text) }
          keyboardType = "phone-pad"
        />        
        <Input
          placeholder="E-mail"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss()}
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          keyboardType = "email-address"
        />
        <Input
          placeholder="Senha"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss()}
          isSecure={true}
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text) }
          secureTextEntry={true}
        />
      </View>

      <View style={styles.areaBtn}>
        <Button
          onPress={(handleSignUp)}
          title={"Cadastrar"}
          activeOpacity={0.7}
        />
        {/* <Text style={styles.link}>
          Cadastrar por outros meios!
        </Text> */}
        <Text 
          style={styles.link}
          onPress={(handleSignIn)}
        >
          Já tenho conta.
        </Text>
      </View>
    </View>
  );
}