import { View, Text, TouchableOpacity, TouchableOpacityProps, TextInput } from 'react-native';
import { styles } from './style';

export function Login({ ...rest }: TouchableOpacityProps) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                paddingHorizontal: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: "500",
                    color: "#000",
                    marginBottom: 20,
                }}
            >
                Login
            </Text>

            <Text
                style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color: "#000",
                    marginBottom: 30,
                }}
            >
                Welcome back!
            </Text>

            <TextInput
                style={{
                    width: "100%",
                    padding: 15,
                    borderRadius: 8,
                    backgroundColor: "#F2F2F2",
                    marginBottom: 15,
                    fontSize: 16,
                    color: "#000",
                }}
                placeholder="Username"
                placeholderTextColor="#B0B0B0"
            />
            <TextInput
                style={{
                    width: "100%",
                    padding: 15,
                    borderRadius: 8,
                    backgroundColor: "#F2F2F2",
                    marginBottom: 15,
                    fontSize: 16,
                    color: "#000",
                }}
                placeholder="Password"
                placeholderTextColor="#B0B0B0"
                secureTextEntry
            />

            <TouchableOpacity
                style={{
                    width: "100%",
                    backgroundColor: "#AD7C00",
                    padding: 15,
                    borderRadius: 8,
                    alignItems: "center",
                    marginBottom: 15,
                }}
                {...rest}
            >
                <Text
                    style={{
                        color: "#FFF",
                        fontSize: 16,
                        fontWeight: "600",
                    }}
                >
                    Sign In
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: "100%",
                    padding: 15,
                    borderRadius: 8,
                    backgroundColor: "#F2F2F2",
                    alignItems: "center",
                    marginBottom: 10,
                }}
            >
                <Text
                    style={{
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "500",
                    }}
                >
                    Forgot Password
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: "100%",
                    padding: 15,
                    borderRadius: 8,
                    backgroundColor: "#F2F2F2",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "500",
                    }}
                >
                    Create Account
                </Text>
            </TouchableOpacity>
        </View>
    );
}