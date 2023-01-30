import React from "react";

import ReccAuthor from "./styles/ReccAuthor";
import ReccFundedPercentage from "./styles/ReccFundedPercentage";
import ReccTitle from "./styles/ReccTitle";

export default function RecommendedForYouComponent(props) {
  return (
    <RecommendedForYouComponentStyle>
      <img
        src="https://source.unsplash.com/random/780x400"
        width="100%"
        style={{ paddingRight: "1em" }}
      />
      <div>
        <ReccTitle>{props.title}</ReccTitle>
        <ReccFundedPercentage>{props.fundedPercentage}</ReccFundedPercentage>
        <ReccAuthor>{props.author}</ReccAuthor>
      </div>
    </RecommendedForYouComponentStyle>
  );
}

import styled from "styled-components";

const RecommendedForYouComponentStyle = styled.section`
  display: flex;
  margin-bottom: 1em;
`;

export { RecommendedForYouComponentStyle };
