import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import Navigation from "./src/navigation";

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

    if (!fontLoaded) {
        return null;
    }

    return <Navigation />;
}
