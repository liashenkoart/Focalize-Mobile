import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex: 1;
    padding: 80px 30px;
    align-items: center;
    justify-content: center;
`;

export const HomeTitle = styled.Text`
    font-family: "Inter_900Black";
    font-size: 65px;
    line-height: 70px;
    width: 100%;
    text-align: left;
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
