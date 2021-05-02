import React, { useState } from "react";
import { View, Text } from "react-native";
import { Wrapper } from "../Home/Home.styles";
import { EvilIcons } from "@expo/vector-icons";
// prettier-ignore
import { Back, BackText, FocusTitleWrapper, FocusSubTitle, FocusTitle, SmallText } from "./Focus.styles";
import Countdown from "../../components/Countdown";

interface FocusProps {
    navigation: any;
    route: any;
}

const Focus: React.FC<FocusProps> = ({ route, navigation }) => {
    const { title } = route.params;
    const [amountMinutes, setAmountMinutes] = useState(20);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Wrapper>
            <Back onPress={() => navigation.goBack()}>
                <EvilIcons name="chevron-left" size={35} color="black" />
                {/* <BackText>Go back </BackText> */}
            </Back>
            <FocusTitleWrapper>
                <FocusSubTitle>Focusing on</FocusSubTitle>
                <FocusTitle>{title}</FocusTitle>
            </FocusTitleWrapper>

            <SmallText>Select the amount of time</SmallText>
            <Text>Hours here</Text>

            <SmallText>Time</SmallText>
            <Countdown isPaused={!isPlaying} minutes={amountMinutes} />
        </Wrapper>
    );
};
export default Focus;
