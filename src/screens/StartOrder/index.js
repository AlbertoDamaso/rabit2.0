import React, { useContext, useState } from 'react';
import {
  View,
  Image,
  Text,
  Keyboard
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { BtnLike } from '../../components/BtnLike';
import { BtnShare } from '../../components/BtnShare';
import { Button } from '../../components/Button';
import { BtnCount }  from '../../components/BtnCount';
import { AreaObs } from '../../components/AreaObs';
import { BtnGoBack } from '../../components/BtnGoBack';
import { AppContext } from '../../contexts/app';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function StartOrder(data) {

  return (
    <Background>      
        <View>
            <Image
              source={{uri:data.route.params.image}}
              style={styles.imgBgHeader}
            />

            <BtnGoBack/>

            {/* <View style={styles.areaShare}>
              <BtnShare/>
            </View> */}

            <View style={styles.areaLike}>
              <BtnLike/>
            </View>

        </View>

        <View style={styles.body}>
          <Text style={styles.title}>
            {data.route.params.title}
          </Text>

          <Text style={[styles.bodyInfo, {height: 25, fontFamily: theme.fonts.title, marginTop: 20,marginBottom: 1, marginHorizontal:20}]}>
            Contém:
          </Text>
          <Text style={styles.bodyInfo}>
            {data.route.params.desc}
          </Text>
         
        </View>
        <Text style={styles.textValor}> 
          {data.route.params.valor}
        </Text>

    </Background>        
  );
}