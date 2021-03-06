import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 45,
    alignSelf:'center',
    paddingHorizontal: 15,
    backgroundColor: theme.colors.secundaryMenos,
    color: theme.colors.light,
    borderRadius: 5,
    fontFamily: theme.fonts.text,
    fontSize: 19,
    borderWidth: 1,
    borderColor: theme.colors.secundaryMenos,
    marginBottom: 20,
  }
});