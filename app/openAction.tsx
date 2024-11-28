import React, {Component} from 'react';
import {Pressable, Text, View} from 'react-native';
// Using the provided hook
import { useActionSheet } from '@expo/react-native-action-sheet';
import {AntDesign} from "@expo/vector-icons";
import {router, usePathname, useRouter} from "expo-router";

export default function OpenAction() {
    const { showActionSheetWithOptions } = useActionSheet();
    const router = useRouter();
    const pathname = usePathname();

    const onPress = () => {
        const isAbout = pathname === '/about'
        const options = isAbout ? ['Sair', 'Cancelar'] : ['Sair', 'Cancelar', 'Sobre',];
        const destructiveButtonIndex = 0;
        const cancelButtonIndex = 2;

        showActionSheetWithOptions({
            options,
            cancelButtonIndex,
            destructiveButtonIndex
        // @ts-ignore
        }, (selectedIndex: number) => {
            switch (selectedIndex) {
                case 2:
                    router.push('/about')
                    break;

                case destructiveButtonIndex:
                    if (router.canDismiss()) {
                        router.dismissAll()
                    }
                    router.replace('/')
                    break;

                case cancelButtonIndex:
                    break
            }});
    }

    return (
        <Pressable onPress={onPress}>
            <AntDesign name="bars" size={24} color="white" />
        </Pressable>
    )
};
