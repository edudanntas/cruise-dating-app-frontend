import { StyleSheet } from 'react-native';
import { Colors } from '@/src/constants/colors';

export const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        width: '100%',
        padding: 16,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    button: {
        fontSize: 22,
        backgroundColor: Colors.secondary,
        padding: 16,
        borderRadius: 8,
        textAlign: 'center',
        marginTop: 40,
    },
    buttonTitle: {
        color: Colors.black,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
