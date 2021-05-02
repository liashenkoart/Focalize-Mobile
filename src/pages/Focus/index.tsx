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

interface FocusProps {
    navigation: any;
    route: any;
}

const Focus: React.FC<FocusProps> = ({ route, navigation }) => {
    useKeepAwake();
    const { title } = route.params;
    const [amountMinutes, setAmountMinutes] = useState(0.1);
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

    const handleEnd = () => {
        vibrate();
        setMinutes(10);
        setIsPlaying(false);
        navigation.replace("Home");
    };

    return (
        <Wrapper>
            <Back onPress={() => navigation.goBack()}>
                <EvilIcons name="chevron-left" size={35} color="black" />
            </Back>
            <FocusTitleWrapper>
                <FocusSubTitle>Focusing on</FocusSubTitle>
                <FocusTitle>{title}</FocusTitle>
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
                onEnd={handleEnd}
            />

            <CountdownControls isPlaying={isPlaying} handlePlay={setPlaying} />

            <DetialBottomFocus>
                <DetailBottom />
            </DetialBottomFocus>
        </Wrapper>
    );
};
export default Focus;
