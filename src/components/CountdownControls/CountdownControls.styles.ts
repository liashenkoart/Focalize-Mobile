import styled from "styled-components/native";

export const ControlsWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

interface CountdownControlsProps {
    size: 1 | 2;
    bgColor: string;
}

export const CountdownControl = styled.TouchableOpacity<CountdownControlsProps>`
    background-color: ${(props) => props.bgColor || "#fff"};
    border-radius: 200px;
    height: ${(props) => (props.size === 1 ? "87px" : "51px")};
    width: ${(props) => (props.size === 1 ? "87px" : "51px")};
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
