import React from 'react';

import {
  View,
  Modal,
  TouchableWithoutFeedback as TWF 
} from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

export function ModalView({children, closeModal, title, ...rest}) {
  return (
    <Modal
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
        <TWF onPress={closeModal}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.modal}>
                      {children}
                    </View>
                </View>    
            </View>
        </TWF>
    </Modal>
  );
}