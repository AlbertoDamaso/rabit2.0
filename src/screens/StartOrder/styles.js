import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imgBgHeader: {
    width: '100%',
    height: 380,
    resizeMode: 'stretch',
    opacity: 0.7,
  },
  areaShare: {
    width: '83%',
    position: 'absolute',
  },
  areaLike: {
    width: '95%',
    position: 'absolute',
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.secundaryMais,
  },
  title: {
    height: 30,
    marginTop: 22,
    marginHorizontal: 18,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
    fontSize: 19,
  },
  bodyInfo: {
    width: '85%',
    marginTop:5,
    marginHorizontal: 25,
    fontFamily: theme.fonts.text,
    color: theme.colors.light,
    fontSize: 16,
    lineHeight: 25,
  },
  textValor: {
    height: 40,
    fontSize: 14,
    paddingTop: 10,
    marginHorizontal: 30,
    fontFamily: theme.fonts.text,
    color: theme.colors.success,
    alignSelf: 'flex-end',
  },
  areaBtn: {
    width: '80%',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
  },



});