import React, { useState } from "react";
import AddFocus, { newFocusProps } from "../../components/AddFocus";
import { HomeTitle, Wrapper } from "./Home.styles";

interface HomeProps {
    navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const [allFocus, setAllFocus] = useState<newFocusProps[] | []>([]);
    const addFocusState = (val: newFocusProps) => {
        setAllFocus([...allFocus, val]);
    };

    return (
        <Wrapper>
            <HomeTitle>What would you like to focus on?</HomeTitle>
            <AddFocus navigation={navigation} handleAddParent={addFocusState} />
        </Wrapper>
    );
};
export default Home;
