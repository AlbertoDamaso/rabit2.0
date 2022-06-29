import React,{ useState } from 'react';
import {
  View,
  Text,
  Switch
} from 'react-native';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function AreaSwitch({...rest}) {

  return (
    <View style={styles.areaSwitch}>
        <Text style={styles.textSwitch}>
            Ativa
        </Text>
        <Switch
            trackColor={{true: theme.colors.primary, false: theme.colors.secundaryMais }}
            ios_backgroundColor= {theme.colors.secundaryMenos}
            {...rest}
        />
    </View>
  );
}