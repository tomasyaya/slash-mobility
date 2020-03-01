import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 400px;
  margin: 10px;
  box-shadow: 6px 9px 6px -9px rgba(0, 0, 0, 0.62);
  background: lightgray;
`;

export const CardImage = styled.img`
  width: 250px;
  height: 260px;
`;

export const CardTitle = styled.h2`
  color: white;
  background: black;
  padding: 8px 0px;
  margin: -20px auto 0 auto;
  text-transform: capitalize;
  font-weight: 400;
  width: 180px;
  text-align: center;
  font-size: 1.1em;
`;

export const CardPrice = styled.p`
  font-weight: bold;
  margin-top: 25px;
  font-size: 1.2em;
`;
