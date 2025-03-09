import { StyleSheet } from 'react-native';
import { Colors } from '@/src/constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 16,
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
    },
    image: {
        width: 338,
        height: 338,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 40,
    },
    secondTitle: {
        fontSize: 34,
        fontWeight: 'semibold',
        marginTop: 40,
        color: 'white',
        textAlign: 'center',
    },
    description: {
        fontSize: 22,
        marginTop: 16,
        color: 'white',
        textAlign: 'center',
    },
    secondDescription: {
        fontSize: 17,
        marginTop: 16,
        color: 'white',
        textAlign: 'center',
    },
    button: {
        fontSize: 22,
        color: 'white',
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
