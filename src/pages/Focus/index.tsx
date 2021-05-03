import React, { useState } from "react";
import { Wrapper } from "../Home/Home.styles";
import { EvilIcons } from "@expo/vector-icons";
// prettier-ignore
import { Back, FocusTitleWrapper, FocusSubTitle, FocusTitle, SmallText, DetialBottomFocus } from "./Focus.styles";
import Countdown from "../../components/Countdown";
import DetailBottom from "../../../assets/images/detailBottomAdd.svg";
import ButtonList from "../../components/ButtonList";
import CountdownControls from "../../components/CountdownControls";
import { useKeepAwake } from "expo-keep-awake";
import { Vibration, Platform } from "react-native";
import { Alert } from "react-native";

interface FocusProps {
    navigation: any;
    route: any;
}

const Focus: React.FC<FocusProps> = ({ route, navigation }) => {
    useKeepAwake();
    const { focus } = route.params;
    const [amountMinutes, setAmountMinutes] = useState(focus.timeRemaing);
    const [isPlaying, setIsPlaying] = useState(false);

    const setPlaying = (value: boolean) => setIsPlaying(value);
    const setMinutes = (min: number) => {
        setIsPlaying(false);
        setAmountMinutes(min);
    };

    const vibrate = () => {
        if (Platform.OS === "ios") {
            const interval = setInterval(() => Vibration.vibrate(), 1000);
            setTimeout(() => clearInterval(interval), 10000);
        } else {
            Vibration.vibrate(10000);
        }
    };

    const handleEnd = async () => {
        vibrate();
    };

    const handleBack = () => {
        if (isPlaying) {
            Alert.alert(
                "Your timer is running",
                "Are you sure you want to go back? The timer will be paused",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => navigation.goBack() },
                ]
            );
        } else {
            navigation.goBack();
        }
    };

    return (
        <Wrapper>
            <Back onPress={handleBack}>
                <EvilIcons name="chevron-left" size={35} color="black" />
            </Back>
            <FocusTitleWrapper>
                <FocusSubTitle>Focusing on</FocusSubTitle>
                <FocusTitle>{focus.title}</FocusTitle>
            </FocusTitleWrapper>

            <SmallText>Select the amount of time</SmallText>
            <ButtonList
                currentSelected={amountMinutes}
                handleSelected={setMinutes}
                isPlaying={isPlaying}
            />

            <SmallText>Time</SmallText>
            <Countdown
                isPaused={!isPlaying}
                minutes={amountMinutes}
                onEnd={() => handleEnd()}
                navigation={navigation}
                focusID={focus.id}
            />

            <CountdownControls
                isPlaying={isPlaying}
                handlePlay={setPlaying}
                navigation={navigation}
            />

            <DetialBottomFocus>
                <DetailBottom />
            </DetialBottomFocus>
        </Wrapper>
    );
};
export default Focus;
