import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaProfile: {
    width: '80%',
    height: 220,
    marginTop: 140,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageProfile: {
    width: 109,
    height: 109,
    borderRadius: 90,
    borderWidth:1,
    borderColor: theme.colors.primary,
  },
  nameProfile: {
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
    fontSize: 19,
    marginTop: 21,
  },
  revProfile: {
    fontFamily: theme.fonts.text,
    color: theme.colors.primaryMenos,
    fontSize: 18,
    marginTop: 21,
  },
  formatBtn: {
    marginTop: 18,
  },
  btnOut: {
    width: '60%',
    height: 45,
    marginTop: 28,
    borderWidth:1,    
    alignSelf:'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    borderColor: theme.colors.primaryMais,
    backgroundColor: theme.colors.primaryMais,
  },
  titleOut: {
    marginTop: 52,
    alignSelf: 'center',
    fontSize: 19,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
  },
  linebtnOut:{
    marginTop: 42,
    justifyContent: 'center',    
    flexDirection: 'row'
  },
  titleConcact: {
    width: '80%',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
    fontSize: 19,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
  },
  textContact: {
    marginBottom: 5,
    marginRight: 5,
    alignSelf: 'center',    
    fontSize: 16,
    color: theme.colors.light,
  },
  lineContact: {
    flexDirection: 'row',
    alignSelf: 'center', 
  },
});