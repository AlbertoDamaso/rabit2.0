import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  lineHeader: {
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    marginTop: 70,
    marginHorizontal: 145,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
    fontSize: 19,
  },
  formatImg: {
    marginTop: 60,
  },
  areaInclu: {
    width: '100%',
    marginTop: 62,
  },
  arealine: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 30,
  },
  inputValor: {
    width: '48%',
    height: 45,
    alignSelf:'flex-start',
    paddingHorizontal: 15,
    color: theme.colors.light,
    backgroundColor: theme.colors.secundaryMenos,
    borderWidth: 1,
    borderColor: theme.colors.secundaryMenos,
    borderRadius: 5,
    fontFamily: theme.fonts.text,
    fontSize: 19,
    marginBottom: 20,    
    marginRight: 10,
  },
  comImage:{
    width: 122,
    height: 169,
    borderRadius: 8,
  },
});