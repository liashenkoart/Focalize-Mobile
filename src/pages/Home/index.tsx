import React, { useState, useEffect } from "react";
import AddFocus, { newFocusProps } from "../../components/AddFocus";
// prettier-ignore
import { DetailBottomWrapper, DetailTopWrapper, HomeTitle, Wrapper} from "./Home.styles";
import TopDetail from "../../../assets/images/detailTop.svg";
import DetailBottom from "../../../assets/images/detailBottom.svg";
import History from "../../components/History";
import AsyncStorage from "@react-native-community/async-storage";

interface HomeProps {
    navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const [allFocus, setAllFocus] = useState<newFocusProps[] | []>([]);

    useEffect(() => {
        loadFocusHistory();
    }, []);

    useEffect(() => {
        loadFocusHistory();
    }, [navigation.isFocused()]);

    const clear = async () => {
        setAllFocus([]);
    };

    const addFocusState = (val: newFocusProps) => {
        setAllFocus([...allFocus, val]);
    };

    const saveFocusHistory = async () => {
        try {
            AsyncStorage.setItem("focus", JSON.stringify(allFocus));
        } catch (e) {
            console.log(e);
        }
    };

    const loadFocusHistory = async () => {
        try {
            const history = await AsyncStorage.getItem("focus");

            if (history && JSON.parse(history).length) {
                setAllFocus(JSON.parse(history));
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        saveFocusHistory();
    }, [allFocus, setAllFocus]);

    return (
        <Wrapper>
            <DetailTopWrapper>
                <TopDetail />
            </DetailTopWrapper>
            <HomeTitle>What would you like to focus on?</HomeTitle>
            <AddFocus navigation={navigation} handleAddParent={addFocusState} />
            <History focuses={allFocus} />
        </Wrapper>
    );
};
export default Home;
