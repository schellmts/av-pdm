import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ButtonProps = {
    text: string;
    onPress: () => void;
}

export default function ImageButton({ text, onPress }: ButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} >
                <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 10,
        alignItems: "center"
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
})