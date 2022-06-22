import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
 
export const styles = StyleSheet.create({

    inputTxt: {
        width: '80%',
        height: 160,
        alignSelf:'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: theme.colors.secundaryMenos,
        color: theme.colors.light,
        borderRadius: 5,
        fontFamily: theme.fonts.text,
        fontSize: 19,
        borderWidth: 1,
        borderColor: theme.colors.secundaryMenos,
        marginBottom: 20,
    },
});