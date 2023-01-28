import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import WrapperFlex from "../Wrapper_Flex";

const ChildWrapper = styled(WrapperFlex)`
  flex-direction: column;
  padding-left: 8em;
  padding-right: 8em;
  padding-top: 2em;
  padding-bottom: 2em;
`;

const Information_Title = styled.h1`
  font-size: 2em;
  font-weight: 400;
`;
const Information_Paragraph = styled.p`
  font-size: 1em;
  font-weight: 400;
`;

export default function Information() {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  return (
    <WrapperFlex
      dark={isDark}
      justifyContent="space-between"
      style={{
        border: 0,
        padding: 0,
        columnGap: 0,
        marginTop: "1em",
      }}
    >
      <ChildWrapper dark={isDark}>
        <Information_Title>233,189</Information_Title>
        <Information_Paragraph>Projects funded</Information_Paragraph>
      </ChildWrapper>

      <ChildWrapper dark={isDark}>
        <Information_Title>$7,070,352,385</Information_Title>
        <Information_Paragraph>towards creative work</Information_Paragraph>
      </ChildWrapper>

      <ChildWrapper dark={isDark}>
        <Information_Title>85,408,879</Information_Title>
        <Information_Paragraph>pledges</Information_Paragraph>
      </ChildWrapper>
    </WrapperFlex>
  );
}
