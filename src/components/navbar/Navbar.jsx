import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import NavbarTitle from "./Navbar_Title";
import WrapperFlex from "../Wrapper_Flex";

export default function Navbar() {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  return (
    <WrapperFlex dark={isDark} justifyContent="center">
      <NavbarTitle>Arts</NavbarTitle>
      <NavbarTitle>Comics & Illustration</NavbarTitle>
      <NavbarTitle>Design & Tech</NavbarTitle>
      <NavbarTitle>Film</NavbarTitle>
      <NavbarTitle>Food & Craft</NavbarTitle>
      <NavbarTitle>Games</NavbarTitle>
      <NavbarTitle>Music</NavbarTitle>
      <NavbarTitle>Publishing</NavbarTitle>
    </WrapperFlex>
  );
}
