import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  clickNao: {
    width: '83%',
    height: 45,
    borderWidth:1,    
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    borderColor: theme.colors.success,
    backgroundColor: theme.colors.success,
  },
  clickSim: {
    width: '83%',
    height: 45,
    borderWidth:1,    
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    borderColor: theme.colors.danger,
    backgroundColor: theme.colors.danger,
  },
  text: {
    flex: 1,
    fontSize: 19,
    textAlign: "center",
    color: theme.colors.secundary,
    fontFamily: theme.fonts.text,
  },
});