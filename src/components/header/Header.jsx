import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import HeaderTitle from "./Header_Title";
import WrapperFlex from "../Wrapper_Flex";

const ChildWrapper = styled(WrapperFlex)`
  border: none;
  padding: 0.3em;
`;

export default function Header() {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  return (
    <WrapperFlex dark={isDark} justifyContent="space-between">
      <ChildWrapper dark={isDark}>
        <HeaderTitle>Discover</HeaderTitle>
        <HeaderTitle>Start a project</HeaderTitle>
      </ChildWrapper>

      <HeaderTitle>Logo</HeaderTitle>

      <ChildWrapper dark={isDark}>
        <HeaderTitle>Search</HeaderTitle>
        <HeaderTitle>Log in</HeaderTitle>
      </ChildWrapper>
    </WrapperFlex>
  );
}
