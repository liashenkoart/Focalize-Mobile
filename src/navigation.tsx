import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { bg } from "./utils/colors";

const Stack = createStackNavigator();

const Navigation: React.FC = ({}) => {
    return (
        <>
            <StatusBar style="dark" />
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Home"
                        screenOptions={{
                            headerShown: false,
                            cardStyle: { backgroundColor: bg },
                        }}
                    >
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </>
    );
};

export default Navigation;
