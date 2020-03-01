import React, { useContext } from "react";
import { itemContext } from "../../context/itemCtx";

import Button from "../Button";
import {
  CheckoutForm,
  Container,
  ButtonsContainer,
  Title,
  Input,
  InputContainer
} from "./styles";

const Modal = () => {
  const { dispatch, store, types } = useContext(itemContext);
  const handleClick = () =>
    dispatch({ type: types.DISPLAY_MODAL, payload: !store.displayModal });
  return (
    store.displayModal && (
      <Container onClick={handleClick}>
        <CheckoutForm>
          <Title>Do you want to buy it?</Title>
          <InputContainer>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
          </InputContainer>
          <ButtonsContainer>
            <Button backgroundColor={"gray"} onClick={handleClick}>
              cancel
            </Button>
            <Button backgroundColor={"black"} onClick={handleClick}>
              confirm
            </Button>
          </ButtonsContainer>
        </CheckoutForm>
      </Container>
    )
  );
};

export default Modal;
