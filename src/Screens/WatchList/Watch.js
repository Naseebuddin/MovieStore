import { View, Text } from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import HeaderComponent from "../../Components/HeaderComponent";
import strings from "../../constants/lang";

const Watch = () => {
  return (
    <WrapperContainer>
      <HeaderComponent goBack title={strings.DETAIL} right_icon />
    </WrapperContainer>
  );
};

export default Watch;
