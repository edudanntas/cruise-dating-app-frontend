import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./style";

type ButtonProps = TouchableOpacityProps & {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.button} {...rest}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}