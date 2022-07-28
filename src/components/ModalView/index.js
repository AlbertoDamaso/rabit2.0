import React from 'react';

import {
  View,
  Modal,
  TouchableWithoutFeedback as TWF 
} from 'react-native';

import { styles } from './styles';

export function ModalView({children, closeModal, ...rest}) {
  return (
    <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        {...rest}
    >
        <TWF onPress={closeModal}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar}/>
                        {children}
                    </Background>
                </View>    
            </View>
        </TWF>
    </Modal>
  );
}