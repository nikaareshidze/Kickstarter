import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import WrapperFlex from "../Wrapper_Flex";
import KeyNumbersTitle from "./Key_Numbers_Title";
import KeyNumbersParagraph from "./Key_Numbers_Paragraph";
import Information from "./Information";

const ThisWrapper = styled(WrapperFlex)`
  flex-direction: column;
  padding-left: 5em;
  padding-right: 5em;
`;

export default function KeyNumbers() {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  return (
    <ThisWrapper dark={isDark} justifyContent="center">
      <KeyNumbersTitle>Bring a creative project to life.</KeyNumbersTitle>
      <div style={{ marginTop: "30px" }}>
        <KeyNumbersParagraph>On KICKSTARTER:</KeyNumbersParagraph>
      </div>
      <Information />
    </ThisWrapper>
  );
}
