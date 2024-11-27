import React from 'react';
import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import OpenAction from "@/app/openAction";

export default function _layout() {
    return (
        <ActionSheetProvider>
            <Stack
                screenOptions={{
                    headerRight: () => <OpenAction />,
                    headerStyle: {
                        backgroundColor: '#192236',
                    },
                    headerTitleStyle: {
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </ActionSheetProvider>
    );
}
