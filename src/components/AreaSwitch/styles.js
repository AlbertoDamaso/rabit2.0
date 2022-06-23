import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    areaSwitch: {
        width: '48%',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.secundaryMenos,
    },
    textSwitch: {
        fontFamily: theme.fonts.text,
        color: theme.colors.primary,
        fontSize: 19,
        marginLeft: 9,
        marginRight: 26,
    },


});