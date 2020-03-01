import styled from "styled-components";

export const Container = styled.div`
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
`;

export const CheckoutForm = styled.form`
  background-color: white;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const InputContainer = styled.div`
  height: 160px;
`;

export const Input = styled.input`
  width: 90%;
  margin: 5px 10px;
  border: 1px solid black;
  padding: 15px 10px;
`;
