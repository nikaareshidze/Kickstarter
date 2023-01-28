import styled from "styled-components";

const WrapperFlex = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent == "center"
      ? "center"
      : props.justifyContent == "space-between"
      ? "space-between"
      : ""};
  align-items: center;
  column-gap: 1em;

  padding: 0.5em;

  border: 1px;
  border-style: solid;
  border-color: ${(props) => (props.dark ? "white" : "black")};

  background-color: ${(props) => (props.dark ? "black" : "white")};
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export default WrapperFlex;
