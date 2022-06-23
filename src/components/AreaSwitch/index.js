import React,{ useState } from 'react';
import {
  View,
  Text,
  Switch
} from 'react-native';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function AreaSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.areaSwitch}>
        <Text style={styles.textSwitch}>
            Ativa
        </Text>
        <Switch
            trackColor={{true: theme.colors.primary, false: theme.colors.secundaryMais }}
            thumbColor={isEnabled ? theme.colors.light : theme.colors.secundary}
            ios_backgroundColor= {theme.colors.secundaryMenos}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>
  );
}