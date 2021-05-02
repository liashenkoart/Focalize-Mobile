import { handleStatusColor } from "./../../utils/functions";
import styled from "styled-components/native";

export const HistoryCardWrapper = styled.View`
    flex-direction: row;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
`;

interface HistoryCardColProps {
    flex: number;
    justify: string;
}

export const HistoryCardCol = styled.View<HistoryCardColProps>`
    flex: ${(props) => props.flex || 1};
    align-items: ${(props) => props.justify || "flex-end"};
`;

export const HistoryCardTitle = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: 400;
`;

interface HistoryCardStatusProps {
    status: number;
}

export const HistoryCardStatus = styled.Text<HistoryCardStatusProps>`
    font-size: 15px;
    color: ${(props) => handleStatusColor(props.status)};
    font-weight: 700;
    margin-top: -4px;
`;

export const HistoryCardLabel = styled.Text`
    font-size: 10px;
    color: #a7a7a7;
    font-weight: 400;
`;

export const HistoryCardDuration = styled.Text`
    font-size: 30px;
    font-weight: 700;
    margin-top: -4px;
    color: #9b9b9b;
`;

export const HistoryResume = styled.View``;
