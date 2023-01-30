import React from "react";

import FeaturedProjectTitle from "./styles/FeaturedProjectTitle";
import FeaturedProjectDescription from "./styles/FeaturedProjectDescription";
import FeaturedProjectAuthor from "./styles/FeaturedProjectAuthor";

export default function FeaturedProjectComponent(props) {
  return (
    <div>
      <img src={props.image} width="80%" />
      <FeaturedProjectTitle>{props.title}</FeaturedProjectTitle>
      <FeaturedProjectDescription>
        {props.description}
      </FeaturedProjectDescription>
      <FeaturedProjectAuthor>{props.author}</FeaturedProjectAuthor>
    </div>
  );
}
