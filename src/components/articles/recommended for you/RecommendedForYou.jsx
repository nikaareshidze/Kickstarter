import React from "react";

import CategoryTitle from "../CategoryTitle";
import RecommendedForYouComponent from "./RecommendedForYouComponent";

export default function RecommendedForYou() {
  return (
    <RecommendedForYouStyle>
      <CategoryTitle>Recommended For You</CategoryTitle>
      <RecommendedForYouComponent
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        fundedPercentage="etiam dignissim diam"
        author="velit aliquet sagittis"
      />
      <RecommendedForYouComponent
        title="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
        fundedPercentage="cursus metus aliquam"
        author="malesuada proin libero"
      />
      <RecommendedForYouComponent
        title="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
        fundedPercentage="cursus metus aliquam"
        author="malesuada proin libero"
      />
    </RecommendedForYouStyle>
  );
}

import styled from "styled-components";

const RecommendedForYouStyle = styled.section`
  width: 45%;
`;

export { RecommendedForYouStyle };
