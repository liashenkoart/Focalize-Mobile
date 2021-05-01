import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import CustomText from "./src/components/CustomText";

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    const loadFonts = async () => {
        await Font.loadAsync({
            Lemon: require("./assets/fonts/Lemon.ttf"),
        });

        setFontLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);

    return (
        <>
            {fontLoaded ? (
                <View>
                    <CustomText>Hello World</CustomText>
                    <StatusBar style="auto" />
                </View>
            ) : (
                <Text>Loading....</Text>
            )}
        </>
    );
}
