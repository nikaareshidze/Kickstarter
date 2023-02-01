import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { darkModeActions } from "../../store/darkModeSlice";

import HeaderTitle from "./Header_Title";
import WrapperFlex from "../Wrapper_Flex";

const ChildWrapper = styled(WrapperFlex)`
  border: none;
  padding: 0.3em;
`;

export default function Header() {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  const dispatch = useDispatch();
  const setIsDark = (payload) => {
    dispatch(darkModeActions.setIsDark(payload));
  };

  function makeWebsiteDark() {
    setIsDark(!isDark);
  }

  return (
    <WrapperFlex dark={isDark} justifyContent="space-between">
      <ChildWrapper dark={isDark}>
        <HeaderTitle>Discover</HeaderTitle>
        <HeaderTitle>Start a project</HeaderTitle>
      </ChildWrapper>

      <HeaderTitle>KICKSTARTER</HeaderTitle>

      <ChildWrapper dark={isDark}>
        <HeaderTitle>Search</HeaderTitle>
        <HeaderTitle>Log in</HeaderTitle>
        <button onClick={makeWebsiteDark}>Dark Mode</button>
      </ChildWrapper>
    </WrapperFlex>
  );
}
