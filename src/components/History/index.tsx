import React, { useState, useEffect } from "react";
import { HistoryTitle, HistoryWrapper } from "./History.styles";
import AsyncStorage from "@react-native-community/async-storage";
import CustomText from "../CustomText";
import { newFocusProps } from "../AddFocus";
import { FlatList } from "react-native-gesture-handler";
import HistoryCard from "../HistoryCard";
import { SafeAreaView } from "react-native-safe-area-context";

interface HistoryProps {
    focuses: newFocusProps[] | [];
}

const History: React.FC<HistoryProps> = ({ focuses }) => {
    const [allFocus, setAllFocus] = useState<newFocusProps[] | []>([]);

    const getFocuses = async () => {
        try {
            const history = await AsyncStorage.getItem("focus");

            if (history && JSON.parse(history).length) {
                setAllFocus(JSON.parse(history));
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getFocuses();
    }, [focuses]);

    useEffect(() => {
        getFocuses();
    }, []);

    return (
        <HistoryWrapper>
            <HistoryTitle>Things you’ve focused on</HistoryTitle>
            <SafeAreaView style={{ flex: 1 }}>
                {allFocus && allFocus.length > 0 ? (
                    <FlatList
                        style={{
                            height: "100%",
                        }}
                        horizontal={false}
                        data={allFocus}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return <HistoryCard info={item} />;
                        }}
                    />
                ) : (
                    <HistoryTitle>Niente</HistoryTitle>
                )}
            </SafeAreaView>
        </HistoryWrapper>
    );
};
export default History;
