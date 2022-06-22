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
  }
});