import React from "react";
import FeaturedProject from "./featured_project/FeaturedProject";
import RecommendedForYou from "./recommended for you/RecommendedForYou";

export default function MainSection() {
  return (
    <MainSectionComponent>
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
`;

export { MainSectionComponent };
