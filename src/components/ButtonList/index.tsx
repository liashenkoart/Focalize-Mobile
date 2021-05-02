import React from "react";
import { blue, ligthOrange, purple } from "../../utils/colors";
// prettier-ignore
import { ButtonListWrapper, ButtonText, SingleButton} from "./ButtonList.styles";

interface ButtonListProps {}

const ButtonList: React.FC<ButtonListProps> = ({}) => {
    return (
        <ButtonListWrapper>
            <SingleButton bgColor={purple}>
                <ButtonText>10 min</ButtonText>
            </SingleButton>
            <SingleButton bgColor={blue}>
                <ButtonText>20 min</ButtonText>
            </SingleButton>
            <SingleButton bgColor={ligthOrange}>
                <ButtonText>30 min</ButtonText>
            </SingleButton>
        </ButtonListWrapper>
    );
};
export default ButtonList;
