import React from "react";

import CategoryTitle from "../CategoryTitle";
import FeaturedProjectComponent from "./FeaturedProjectComponent";

export default function FeaturedProject() {
  return (
    <FeaturedProjectStyle>
      <CategoryTitle>Featured Project</CategoryTitle>
      <FeaturedProjectComponent
        image="https://source.unsplash.com/random/900x490"
        title="Mini Doughnut Paintings"
        description="Hand-painted original watercolor/gouache paintings of glazed
        doughnuts..but tiny! 🍩"
        author="By Grace Miner"
      />
    </FeaturedProjectStyle>
  );
}

import styled from "styled-components";

const FeaturedProjectStyle = styled.section`
  width: 55%;
`;

export { FeaturedProjectStyle };
