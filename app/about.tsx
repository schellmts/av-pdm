import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from "expo-router";

export default function About() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Sobre', headerBackVisible: true }} />
            <Text style={styles.headerTitle}>PDM Airlines</Text>
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Versão 1.0</Text>
                <Text style={styles.text}>Desenvolvido por: Matheus Santos</Text>
                <Link style={styles.linkButton} href={'https://github.com/schellmts'}>
                    <Text style={styles.text}>GitHub</Text>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        alignItems: 'center',
        gap: 50,
        width: '100%',
        backgroundColor: '#0A1D37',
    },
    headerContainer: {
        backgroundColor: '#1E2A47',
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        gap: 10,
        padding: 20
    },
    headerTitle: {
        color: '#ADD8E6',
        fontSize: 20,
    },
    text: {
        color: '#ADD8E6',
        textAlign: 'center',
        fontSize: 18
    },
    linkButton: {
        backgroundColor: '#0A1D37',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10
    }
})
