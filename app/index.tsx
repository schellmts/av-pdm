import React, {useState, useEffect} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import LoginPage from "@/app/loginPage";

export default function _screen() {
    return (
        <LoginPage />
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
})
