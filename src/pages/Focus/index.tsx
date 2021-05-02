import React, { useState } from "react";
import { View, Text } from "react-native";
import { Wrapper } from "../Home/Home.styles";
import { EvilIcons } from "@expo/vector-icons";
// prettier-ignore
import { Back, BackText, FocusTitleWrapper, FocusSubTitle, FocusTitle, SmallText, DetialBottomFocus } from "./Focus.styles";
import Countdown from "../../components/Countdown";
import DetailBottom from "../../../assets/images/detailBottomAdd.svg";
import ButtonList from "../../components/ButtonList";
import CountdownControls from "../../components/CountdownControls";

interface FocusProps {
    navigation: any;
    route: any;
}

const Focus: React.FC<FocusProps> = ({ route, navigation }) => {
    const { title } = route.params;
    const [amountMinutes, setAmountMinutes] = useState(20);
    const [isPlaying, setIsPlaying] = useState(false);

    const setPlaying = (value: boolean) => setIsPlaying(value);

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
            <ButtonList />

            <SmallText>Time</SmallText>
            <Countdown isPaused={!isPlaying} minutes={amountMinutes} />

            <CountdownControls
                isPlaying={isPlaying}
                // @ts-ignore
                handlePlay={setPlaying}
            />

            <DetialBottomFocus>
                <DetailBottom />
            </DetialBottomFocus>
        </Wrapper>
    );
};
export default Focus;
