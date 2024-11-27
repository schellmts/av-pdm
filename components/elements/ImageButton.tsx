import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ButtonProps = {
    source: any;
    onPress: () => void;
}

export default function ImageButton({ source, onPress }: ButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.loginButton} >
                <Image style={styles.image} source={source} />
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
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    image: {
        width: '80%',
        height: 50,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'semibold'
    },
})