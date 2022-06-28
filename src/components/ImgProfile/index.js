import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function ImgProfile({...rest}) {
  return (
    <Image
      style={styles.imageProfile}
      resizeMode="cover"
      {...rest}
    />

  );
}