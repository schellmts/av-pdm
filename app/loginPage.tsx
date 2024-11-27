import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import ImageButton from "@/components/elements/ImageButton";
import { Stack, useRouter } from "expo-router";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        if (username === 'fulano' && password === '123') {
            Alert.alert("Login Efetuado, seja bem vindo ao PDM Airlines!")
            router.push('/homepage')
        } else {
            Alert.alert("Login bloqueado, confirme suas credenciais.")
        }
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.headerContainer}>
                <Image style={styles.image} source={require('../assets/images/logologin.png')} />
                <Text style={styles.headerText}>PDMAirlines</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Usuário</Text>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        style={styles.inputContainer}
                        placeholder="Digite seu usuário"
                        placeholderTextColor="#ADD8E6"
                    />
                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        style={styles.inputContainer}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#ADD8E6"
                    />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <ImageButton
                    source={{ uri: 'https://www.pngplay.com/wp-content/uploads/1/Login-PNG-Royalty-Free-High-Quality.png' }}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        width: '100%',
        backgroundColor: '#0A1D37',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ADD8E6',
    },
    bottomContainer: {
        width: '80%',
        gap: 15,
        alignItems: "center",
    },
    inputArea: {
        width: '100%',
        gap: 5,
    },
    label: {
        color: '#ADD8E6',
        fontWeight: 'bold',
        fontSize: 18,
    },
    inputContainer: {
        padding: 10,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#ADD8E6',
        color: '#FFFFFF',
        borderRadius: 8,
        width: '100%',
        height: 50,
        fontWeight: '500',
        backgroundColor: '#1E2A47',
    },
    loginButton: {
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ADD8E6',
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'semibold',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    }
});
