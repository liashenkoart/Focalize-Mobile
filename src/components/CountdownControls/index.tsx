import React from "react";
// prettier-ignore
import { ControlsWrapper, CountdownControl} from './CountdownControls.styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { play, red } from "../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";

interface CountdownControlsProps {
    isPlaying: boolean;
    handlePlay: (val: boolean) => any;
    navigation: any;
}

const CountdownControls: React.FC<CountdownControlsProps> = ({
    isPlaying = false,
    handlePlay,
    navigation,
}) => {
    const handleStop = () => {
        Alert.alert(
            "Cancel focus",
            "Are you sure you want to cancel your focus?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                { text: "OK", onPress: () => navigation.replace("Home") },
            ]
        );
    };

    return (
        <ControlsWrapper>
            <CountdownControl size={2} bgColor="#415A77">
                <MaterialCommunityIcons
                    name="restart"
                    size={20}
                    color="white"
                />
            </CountdownControl>

            <CountdownControl
                size={1}
                bgColor={play}
                onPress={() => handlePlay(!isPlaying)}
            >
                {isPlaying ? (
                    <AntDesign name="pause" size={35} color="white" />
                ) : (
                    <FontAwesome name="play" size={30} color="white" />
                )}
            </CountdownControl>

            <CountdownControl size={2} bgColor={red} onPress={handleStop}>
                <FontAwesome name="stop" size={20} color="white" />
            </CountdownControl>
        </ControlsWrapper>
    );
};
export default CountdownControls;
