import React from 'react';
import {
  TextInput,
  Keyboard,
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function DescCerv({...rest}) {
  return (
    <TextInput
      editable
      multiline
      maxLength={140}
      autoCorrect={false}
      autoCapitalize="none"             
      textAlignVertical={'top'}
      onSubmitEditing={ () => Keyboard.dismiss()}
      placeholderTextColor={theme.colors.primary}
      style={styles.inputTxt}
      {...rest}
    />
  );
}