import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './style';

export function Onboarding({ ...rest }: TouchableOpacityProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cruise Mingle</Text>
            <Image style={styles.image} source={require('@/assets/images/cruise-onboarding.png')} />
            <Text style={styles.secondTitle}>Cruise Mingle</Text>
            <Text style={styles.description}>Find your perfect match on the high seas!</Text>
            <Text style={styles.secondDescription}>Join thousands of singles on a journey of a lifetime.</Text>
            <TouchableOpacity style={styles.button} {...rest}>
                <Text style={styles.buttonTitle}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}