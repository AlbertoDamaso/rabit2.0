import React, { useContext } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { styles } from './styles';

export function BtnModal({ title, ...rest}) {

  return (
    <View>
    {
        title == 'Não' ?
        <TouchableOpacity
        style={styles.clickNao}
        {...rest}
        >
            <Text style={styles.text}>
                { title }
            </Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
            style={styles.clickSim}
            {...rest}
        >
            <Text style={styles.text}>
                { title }
            </Text>
        </TouchableOpacity>
        }
    </View>
  );
}