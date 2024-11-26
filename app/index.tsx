import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import ImageButton from "@/components/elements/ImageButton";

export default function _screen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setValid] = useState(false);

    const handleSubmit = () => {
        if (username === 'fulano' && password === '123') {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.image} source={require('../assets/images/logologin.png')} />
                <Text style={styles.headerText}>PDMAirlines</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Usuário</Text>
                    <TextInput value={username} onChangeText={setUsername} style={styles.inputContainer} placeholder={'Digite seu usuário'} />
                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.inputContainer} placeholder={'Digite sua senha'} />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <ImageButton text={'Entrar'} onPress={() => handleSubmit()} />
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
        width: '100%'
    },
    headerContainer: {
      alignItems: 'center',
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#192236'
    },
    bottomContainer: {
      width: '70%',
      gap: 10,
      alignItems: "center"
    },
    inputArea: {
      width: '100%',
      gap: 5,
    },
    label: {
      color: '#192236',
      fontWeight: 'bold',
      fontSize: 18,
    },
    inputContainer: {
        padding: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#a1a1a1',
        color: '#787878',
        borderRadius: 5,
        width: '100%',
        height: 50,
        fontWeight: 500
    },
    loginButton: {
        backgroundColor: '#192236',
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'semibold'
    },
    image: {
        width: 200,
        height: 200
    }
})
