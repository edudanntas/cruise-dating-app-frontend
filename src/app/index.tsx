import { View, Text, StyleSheet, Alert, SafeAreaView } from 'react-native';

import { Onboarding } from '@/src/components/onboarding'
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import "@/src/styles/global.css";

export default function Index() {

    const handleLogin = () => {
        router.navigate("/auth");
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <Onboarding onPress={handleLogin} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})