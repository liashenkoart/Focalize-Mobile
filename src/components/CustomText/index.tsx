import React from "react";
import { Text } from "react-native";

const CustomText: React.FC = ({ children }) => {
    return <Text style={{ fontFamily: "Lemon" }}>{children}</Text>;
};
export default CustomText;
