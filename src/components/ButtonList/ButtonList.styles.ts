import styled from "styled-components/native";

export const ButtonListWrapper = styled.View`
    padding: 4px 0 22px 0;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface SingleButtonProps {
    bgColor: string;
}

export const SingleButton = styled.TouchableOpacity<SingleButtonProps>`
    padding: 12px 22px;
    background-color: ${(props) => props.bgColor || "#fff"};
    border-radius: 11px;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #293241;
`;
