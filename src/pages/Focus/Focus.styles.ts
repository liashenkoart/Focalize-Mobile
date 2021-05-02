import styled from "styled-components/native";

export const Back = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
`;

export const BackText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const FocusTitleWrapper = styled.View`
    margin: 40px 0 30px 0;
    flex-direction: column;
`;

export const FocusSubTitle = styled.Text`
    color: rgba(192, 192, 192, 1);
    font-size: 20px;
    text-align: center;
`;

export const FocusTitle = styled.Text`
    color: white;
    font-size: 35px;
    font-weight: 700;
    margin-top: -6px;
    text-align: center;
`;

export const SmallText = styled.Text`
    text-align: center;
    font-size: 14px;
    color: rgba(167, 167, 167, 1);
    margin: 10px 0;
`;

export const DetialBottomFocus = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;
