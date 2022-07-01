import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback as TWF
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function Oferta2({ data, deleteItem }){
  const navigation = useNavigation();

  function handleStartOrder(){
    navigation.navigate('StartOrder',data);
  }

  return (
    <TWF
      onPress={(handleStartOrder)}
      //disabled={true}
      onLongPress={ () => deleteItem(data)}
    >
        <View style={styles.container}>
            <View style={styles.areaTxt}>
                <Text style={styles.title}>
                  {data.title}
                </Text>
                <Text style={styles.text}>
                  {data.desc}
                </Text>

                <Text style={styles.textValor}> 
                  {data.valor} 
                </Text>
            </View>
            <View style={styles.areaImg}>
                <Image
                  source={{uri:data.image}}
                  style={styles.image}
                />  
            </View>
        </View>
    </TWF>    
  );
}