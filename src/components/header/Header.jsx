import React, { useState } from "react";
import styled from "styled-components";

import HeaderTitle from "./Header_Title";

const ThisWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  background-color: ${(props) => (props.dark ? "black" : "white")};
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThisWrapper dark={isDark}>
      <ThisWrapper dark={isDark}>
        <HeaderTitle>Discover</HeaderTitle>
        <HeaderTitle>Start a project</HeaderTitle>
      </ThisWrapper>

      <HeaderTitle>Logo</HeaderTitle>

      <ThisWrapper dark={isDark}>
        <HeaderTitle>Search</HeaderTitle>
        <HeaderTitle>Log in</HeaderTitle>
      </ThisWrapper>
    </ThisWrapper>
  );
}
