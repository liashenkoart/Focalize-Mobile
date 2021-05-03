import React from "react";
import Navigation from "./src/navigation";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Loading....</Text>
            </View>
        );
    }

    return <Navigation />;
}
