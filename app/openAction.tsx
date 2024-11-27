import React, {Component} from 'react';
import {Pressable, Text, View} from 'react-native';
// Using the provided hook
import { useActionSheet } from '@expo/react-native-action-sheet';
import {AntDesign} from "@expo/vector-icons";
import {router, useRouter} from "expo-router";

export default function OpenAction() {
    const { showActionSheetWithOptions } = useActionSheet();
    const router = useRouter();

    const onPress = () => {
        const options = ['Sair', 'Sobre', 'Cancelar'];
        const destructiveButtonIndex = 0;
        const cancelButtonIndex = 2;

        showActionSheetWithOptions({
            options,
            cancelButtonIndex,
            destructiveButtonIndex
        // @ts-ignore
        }, (selectedIndex: number) => {
            switch (selectedIndex) {
                case 1:
                    router.push('/about')
                    break;

                case destructiveButtonIndex:
                    router.replace('/')
                    break;

                case cancelButtonIndex:
            }});
    }

    return (
        <Pressable onPress={onPress}>
            <AntDesign name="bars" size={24} color="white" />
        </Pressable>
    )
};
