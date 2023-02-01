import React from "react";
import { useSelector } from "react-redux";

import FeaturedProject from "./featured_project/FeaturedProject";
import RecommendedForYou from "./recommended for you/RecommendedForYou";

export default function MainSection() {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  return (
    <MainSectionComponent dark={isDark}>
      <FeaturedProject />
      <RecommendedForYou />
    </MainSectionComponent>
  );
}

import styled from "styled-components";

const MainSectionComponent = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 2em;
  padding-left: 5em;
  padding-right: 5em;
  padding-bottom: 3em;
  padding-top: 2em;

  border: 1px;
  border-style: solid;
  border-color: ${(props) => (props.dark ? "white" : "black")};

  background-color: ${(props) => (props.dark ? "black" : "white")};
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export { MainSectionComponent };
