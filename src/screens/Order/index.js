import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Background } from '../../components/Background';
import { BtnDrawer } from '../../components/BtnDrawer';
import { ListReserv } from '../../components/ListReserv';

import { styles } from './styles';
import { AppContext } from '../../contexts/app';

//Arrumar o Order 
export function Order() {
  const { reservList } = useContext(AppContext);
  
  return (
    <Background>
        <View style={styles.container}>
          <BtnDrawer/>

          <Text style={styles.title}>
              Reservados{reservList && reservList.title}
          </Text>

          <ListReserv
            data={reservList}
            showsVerticalScrollIndicator={false}
          />
        </View>
    </Background>  
  );
}