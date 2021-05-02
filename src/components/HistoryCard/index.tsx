import React from "react";
import { handleStatusText, trimTitle } from "../../utils/functions";
import { newFocusProps } from "../AddFocus";
import { AntDesign } from "@expo/vector-icons";
// prettier-ignore
import { HistoryCardWrapper, HistoryCardTitle, HistoryCardCol, HistoryCardStatus, HistoryCardLabel, HistoryCardDuration} from "./HistoryCard.styles";

interface HistoryCardProps {
    info: newFocusProps;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ info }) => {
    const { title, status, timeRemaing } = info;

    return (
        <HistoryCardWrapper>
            <HistoryCardCol flex={3} justify="flex-start">
                <HistoryCardTitle>{trimTitle(title)}</HistoryCardTitle>
                <HistoryCardStatus status={status}>
                    {handleStatusText(status)}
                </HistoryCardStatus>
            </HistoryCardCol>

            {status === 3 && (
                <HistoryCardCol flex={1} justify="flex-end">
                    <AntDesign name="play" size={30} color="white" />
                </HistoryCardCol>
            )}
        </HistoryCardWrapper>
    );
};
export default HistoryCard;
