import React from "react";
import { blue } from "../../utils/colors";
// prettier-ignore
import { ButtonListWrapper, ButtonText, SingleButton} from "./ButtonList.styles";
import { Alert } from "react-native";

interface ButtonListProps {
    currentSelected: number;
    handleSelected: (min: number) => any;
    isPlaying: boolean;
}

const ButtonList: React.FC<ButtonListProps> = ({
    currentSelected,
    handleSelected,
    isPlaying,
}) => {
    const handleClick = (amount: number) => {
        if (isPlaying) {
            Alert.alert(
                "Your timer is running",
                "Are you sure you want to change the amount of time? The timer will restart",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => handleSelected(amount) },
                ]
            );
        } else {
            handleSelected(amount);
        }
    };

    return (
        <ButtonListWrapper>
            <SingleButton bgColor="#FF7900" onPress={() => handleClick(10)}>
                <ButtonText>10 min</ButtonText>
            </SingleButton>
            <SingleButton bgColor={blue} onPress={() => handleClick(20)}>
                <ButtonText>20 min</ButtonText>
            </SingleButton>
            <SingleButton bgColor="#b69121" onPress={() => handleClick(30)}>
                <ButtonText>30 min</ButtonText>
            </SingleButton>
        </ButtonListWrapper>
    );
};
export default ButtonList;
