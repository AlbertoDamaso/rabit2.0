import React, { useContext } from 'react';
import {
  FlatList,
  Alert
} from 'react-native';

import { AppContext } from '../../contexts/app';
import { LineDivider } from '../LineDivider';
import { Oferta2 } from '../Oferta2';
import { styles } from './styles';

export function ListOfertas2({ data, ...rest }) {
  const { removBeer } = useContext(AppContext);

  //Funcao para confirmar o delete stockI
  function handleDelete(data){
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

  function handleDeleteSuccess(data){
    removBeer(data);
  }  
  return (
    <FlatList
      data={data}
      style={styles.matches}
      ItemSeparatorComponent={() => <LineDivider/>}
      keyExtractor={ item => item.key}
      renderItem={({ item }) => (
        <Oferta2 data={item} deleteItem={handleDelete}/> 
      )}
      {...rest}
    />  
  );
}