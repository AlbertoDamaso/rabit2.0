import React, { useContext } from 'react';
import {
  FlatList,
  Alert
} from 'react-native';

import { AppContext } from '../../contexts/app';
import { AuthContext } from '../../contexts/auth';

import { Oferta } from '../Oferta';
import { styles } from './styles';

export function ListOfertas({ data, ...rest }) {
  const { removBeer } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  //Funcao para confirmar o delete stockA
  function handleDelete(data){
    if (user.useType == "Administrador"){
      Alert.alert(
        'Cuidado Atenção!',
        `Você deseja excluir ${data.title}`,
        [
          {
            text:'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Continuar',
            onPress: () => handleDeleteSuccess(data)
          }
        ]
      )
    }
  }

  function handleDeleteSuccess(data){
    removBeer(data);
  }
  
  return (
    <FlatList
        data={data}
        style={styles.matches}
        keyExtractor={ item => item.key}
        renderItem={({ item }) => (
          <Oferta data={item} deleteItem={handleDelete}/> 
        )}
        {...rest}
    />  
  );
}