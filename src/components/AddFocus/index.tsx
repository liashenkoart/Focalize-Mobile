import React, { useState } from "react";
import { AddButton, AddInput, AddWrapper } from "./AddFocus.styles";
import { Ionicons } from "@expo/vector-icons";

interface AddFocusProps {
    navigation: any;
}

const AddFocus: React.FC<AddFocusProps> = ({ navigation }) => {
    const [newFocus, setNewFocus] = useState("");
    const handleAdd = () => {
        if (!newFocus || newFocus === "") return null;
        navigation.navigate("Focus", { title: newFocus });
    };

    return (
        <AddWrapper>
            <AddInput
                placeholder="E.g code an app"
                onChange={(e) => setNewFocus(e.nativeEvent.text)}
            />
            <AddButton onPress={handleAdd}>
                <Ionicons name="add" size={30} color="black" />
            </AddButton>
        </AddWrapper>
    );
};
export default AddFocus;
