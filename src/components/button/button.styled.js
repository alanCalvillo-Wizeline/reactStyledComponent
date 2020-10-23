import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  color: ${(props) => (props.primary ? "violet" : "palevioletred")};
  border: "2px solid"
  border-color: ${(props) => (props.primary ? "violet" : "palevioletred")};
  margin: 0 1em;
  margin-top 5px;
  padding: 0.25em 1em;
  
  transition: 0.5s all ease-out;
 
  &:hover {
    color: white;
    background-color: ${(props) =>
      props.primary ? "violet" : "palevioletred"};
  }
`;
