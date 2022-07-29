import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay
    },
    container:{
        flex: 1,
        justifyContent: 'center',
    },

    modal: {
        width: '84%',
        height: 200,
        borderRadius: 45,
        alignSelf:'center',  
        backgroundColor: theme.colors.secundary,
    }
})
