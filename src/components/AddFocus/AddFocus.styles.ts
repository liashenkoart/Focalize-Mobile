import { add } from "./../../utils/colors";
import styled from "styled-components/native";

export const AddWrapper = styled.View`
    flex: 1;
    margin-top: 15px;
    flex-direction: row;
    max-height: 58px;
`;

export const AddInput = styled.TextInput`
    padding: 16px;
    font-size: 18px;
    background-color: #fff;
    color: #222;
    flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
    padding: 5px 10px;
    background-color: ${add};
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;
