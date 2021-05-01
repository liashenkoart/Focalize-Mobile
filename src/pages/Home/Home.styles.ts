import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex: 1;
    padding: 100px 40px;
`;

export const HomeTitle = styled.Text`
    font-family: "Lemon";
    font-size: 25px;
    font-weight: 700;
`;

export const DetailTopWrapper = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;

export const DetailBottomWrapper = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;
