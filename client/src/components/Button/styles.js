import styled from "styled-components";

export const CustomButton = styled.button`
  border: none;
  width: 100%;
  background: ${props => props.backgroundColor};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  height: 50px;
  margin-top: 10px;
  font-size: 1.1em;
`;
