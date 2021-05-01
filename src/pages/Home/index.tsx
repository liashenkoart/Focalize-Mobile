import React from "react";
import AddFocus from "../../components/AddFocus";
import {
    DetailBottomWrapper,
    DetailTopWrapper,
    HomeTitle,
    Wrapper,
} from "./Home.styles";
import TopDetail from "../../../assets/images/detailTop.svg";
import DetailBottom from "../../../assets/images/detailBottom.svg";

const Home: React.FC = ({}) => {
    return (
        <Wrapper>
            <DetailTopWrapper>
                <TopDetail />
            </DetailTopWrapper>
            <HomeTitle>What would you like to focus on?</HomeTitle>
            <AddFocus />
            <DetailBottomWrapper>
                <DetailBottom />
            </DetailBottomWrapper>
        </Wrapper>
    );
};
export default Home;
