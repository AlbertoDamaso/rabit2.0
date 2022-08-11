import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity as TO,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { Background } from '../../components/Background';
import { BtnDrawer } from '../../components/BtnDrawer';
import { ImgProfile } from '../../components/ImgProfile';
import { ModalView } from '../../components/ModalView';
import { BtnModal } from '../../components/BtnModal';
import { Button } from '../../components/Button';

import { AuthContext } from '../../contexts/auth';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Profile() {
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);
  const [ openModalOut, setOpenModalOut ] = useState(false);
  const [ openModalContact, setOpenModalContact ] = useState(false);


  function handleCoiedText1(){
    Clipboard.setString('62999382217');
  } 
  function handleCoiedText2(){
    Clipboard.setString('62996527542');
  } 
  function handleCoiedText3(){
    Clipboard.setString('62999764644');
  } 


  function handleHome(){
    navigation.navigate('Reservar');
  }

  function handleOpenModalOut(){
    setOpenModalOut(true)
  }

  function handleClosedModalOut(){
    setOpenModalOut(false)
  }

  function handleOpenModalContact(){
    setOpenModalContact(true)
  }

  function handleClosedModalContact(){
    setOpenModalContact(false)
  }  


  return (
    <Background>
      <View style={styles.container}>

        <BtnDrawer/>

        <View style={styles.areaProfile}>
          <ImgProfile
            source={{uri:user && user.image}}
            style={styles.imageProfile}
          /> 
          <Text style={styles.nameProfile}>
            {user && user.name}  
          </Text>   
          <Text style={styles.revProfile}>
            reservas
          </Text>
           <Text style={[styles.revProfile,{marginTop: 7}]}>
            retiradas
          </Text>
        </View>

        <View>
          <View style={styles.formatBtn}>
            <Button
              title={'Reservar mais'}
              activeOpacity={0.7}
              onPress={(handleHome)}
            />  
          </View>

          <View style={styles.formatBtn}>
            <Button
              title={'Retirar/Contatos'}
              activeOpacity={0.7}
              onPress={(handleOpenModalContact)}
            />  
          </View>

          <Button
            title={'Sair'}
            activeOpacity={0.7}
            style={styles.btnOut}
            onPress={(handleOpenModalOut)}
          />                  
        </View>

        <ModalView visible={openModalContact} closeModal={handleClosedModalContact}>
          <Text style={styles.titleConcact}>
            Entre em Contacto para retirada da cereveja... 
          </Text>
          <View style={styles.lineContact}>
            <Text style={styles.textContact}>
              Anderson - (62) 99938-2217
            </Text>
            <TO
              onPress={(handleCoiedText1)}
            >
              <Feather
                name="copy"
                color={theme.colors.secundaryMais}
                size={24}
              />
            </TO>
          </View>
          <View style={styles.lineContact}>
            <Text style={styles.textContact}>
              Carmen - (62) 99652-7542  
            </Text>
            <TO
              onPress={(handleCoiedText2)}
            >
              <Feather
                name="copy"
                color={theme.colors.secundaryMais}
                size={24}
              /> 
            </TO>           
          </View>
          <View style={styles.lineContact}>
            <Text style={styles.textContact}>
              Danns - (62) 99976-4644
            </Text>
            <TO
              onPress={(handleCoiedText3)}
            >
            <Feather
              name="copy"
              color={theme.colors.secundaryMais}
              size={24}
            />   
            </TO>         
          </View>
          <Button
            title={'Voltar'}
            activeOpacity={0.7}
            onPress={(handleClosedModalContact)}          
          />
        </ModalView>

        <ModalView visible={openModalOut} closeModal={handleClosedModalOut}>
          <Text style={styles.titleOut}>
            Deseja realmente sair?
          </Text>
          <View style={styles.linebtnOut}>
            <BtnModal
              title={'Não'}
              activeOpacity={0.7}
              onPress={(handleClosedModalOut)}
            />
            <BtnModal
              title={'Sim'}
              activeOpacity={0.7}
              onPress={() => signOut()}
            />
          </View>
        </ModalView>
      </View>
    </Background>
  );
}