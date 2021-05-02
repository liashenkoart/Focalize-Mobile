import React from "react";
import { blue, ligthOrange, orange, purple } from "../../utils/colors";
// prettier-ignore
import { ButtonListWrapper, ButtonText, SingleButton} from "./ButtonList.styles";
import { AntDesign } from "@expo/vector-icons";

interface ButtonListProps {
    currentSelected: number;
    handleSelected: (min: number) => any;
}

const ButtonList: React.FC<ButtonListProps> = ({
    currentSelected,
    handleSelected,
}) => {
    return (
        <ButtonListWrapper>
            <SingleButton bgColor="#FF7900" onPress={() => handleSelected(10)}>
                <ButtonText>10 min</ButtonText>
            </SingleButton>
            <SingleButton bgColor={blue} onPress={() => handleSelected(20)}>
                <ButtonText>20 min</ButtonText>
            </SingleButton>
            <SingleButton bgColor="#b69121" onPress={() => handleSelected(30)}>
                <ButtonText>30 min</ButtonText>
            </SingleButton>
        </ButtonListWrapper>
    );
};
export default ButtonList;
