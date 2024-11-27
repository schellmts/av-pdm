import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import { Stack } from "expo-router";
import SectionListComponent from "@/components/SectionListComponent";

export default function Homepage() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Página Principal', headerBackVisible: false }} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Bem vindo a PDM Airlines!</Text>
                <Text style={styles.headerSubtitle}>Confira nossos clientes agrupados por país abaixo:</Text>
            </View>
            <SectionListComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#0A1D37',
        alignItems: 'center',
        gap: 50,
        width: '100%',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ADD8E6',
        textAlign: 'center',
    },
    headerSubtitle: {
        fontWeight: '600',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    item: {
        padding: 15,
        backgroundColor: '#1E2A47',
        marginVertical: 10,
        borderRadius: 10,
        width: '100%',
    },
    header: {
        backgroundColor: '#1E2A47',
        padding: 10,
        borderRadius: 8,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ADD8E6',
    },
});
