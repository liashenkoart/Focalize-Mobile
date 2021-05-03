import React, { useState, useEffect } from "react";
import { AddButton, AddInput, AddWrapper } from "./AddFocus.styles";
import { Ionicons } from "@expo/vector-icons";
import uuid from "react-native-uuid";
import { status } from "../../utils/functions";
import { useRoute } from "@react-navigation/native";

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
    const router = useRoute();
    const [newFocus, setNewFocus] = useState("");

    useEffect(() => {
        setNewFocus("");
    }, [router.name]);

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
                onSubmitEditing={handleAdd}
            />
            <AddButton onPress={handleAdd}>
                <Ionicons name="add" size={30} color="black" />
            </AddButton>
        </AddWrapper>
    );
};
export default AddFocus;
