import React, { useState } from "react";
import { AddButton, AddInput, AddWrapper } from "./AddFocus.styles";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import uuid from "react-native-uuid";
import { status } from "../../utils/functions";

export interface newFocusProps {
    id: string | number[];
    title: string;
    status: number;
    timeRemaing: number;
}

interface AddFocusProps {
    navigation: any;
    handleAddParent: (focus: newFocusProps) => any;
}

const AddFocus: React.FC<AddFocusProps> = ({ navigation, handleAddParent }) => {
    const [newFocus, setNewFocus] = useState("");
    const handleAdd = async () => {
        if (!newFocus || newFocus === "") return null;

        const newFocusProperties = {
            id: uuid.v4(),
            title: newFocus,
            status: status.PAUSED,
            timeRemaing: 10,
        };

        handleAddParent(newFocusProperties);
        navigation.navigate("Focus", { focus: newFocusProperties });
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
