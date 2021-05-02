import React from "react";
import AddFocus from "../../components/AddFocus";
// prettier-ignore
import { DetailBottomWrapper, DetailTopWrapper, HomeTitle, Wrapper} from "./Home.styles";
import TopDetail from "../../../assets/images/detailTop.svg";
import DetailBottom from "../../../assets/images/detailBottom.svg";

interface HomeProps {
    navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <Wrapper>
            <DetailTopWrapper>
                <TopDetail />
            </DetailTopWrapper>
            <HomeTitle>What would you like to focus on?</HomeTitle>
            <AddFocus navigation={navigation} />
            <DetailBottomWrapper>
                <DetailBottom />
            </DetailBottomWrapper>
        </Wrapper>
    );
};
export default Home;
