import React, { useContext, useReducer } from "react";
import Cards from "react-credit-cards";
import { itemContext } from "../../context/itemCtx";
import { modalReducer, modalTypes } from "./modalReducer";
import "react-credit-cards/es/styles-compiled.css";
import Button from "../Button";
import {
  CheckoutForm,
  Container,
  ButtonsContainer,
  Title,
  Input,
  InputContainer
} from "./styles";

const initialState = {
  password: "",
  username: "",
  user: {
    username: "",
    cardNumber: 456534549876342,
    cardName: "tomas yaya"
  },
  showCard: false
};

const Modal = () => {
  const { dispatch, store, types } = useContext(itemContext);
  const [state, modalDispatch] = useReducer(modalReducer, initialState);
  const handleClick = () =>
    dispatch({ type: types.DISPLAY_MODAL, payload: !store.displayModal });
  const handleSubmit = e => {
    e.preventDefault();
    if (!state.showCard) {
      console.log("inside");
      modalDispatch({
        type: modalTypes.UPDATE_USER,
        payload: {
          user: {
            username: state.username
          },
          showCard: true
        }
      });
      modalDispatch({ type: modalTypes.CLEAN_CREDENTIALS });
      return;
    }
    dispatch({ type: types.DISPLAY_MODAL });
  };

  return (
    store.displayModal && (
      <Container>
        <CheckoutForm onSubmit={handleSubmit}>
          <Title>Do you want to buy it?</Title>
          <InputContainer>
            {!state.showCard ? (
              <>
                <Input
                  required
                  value={state.username}
                  placeholder="Username"
                  onChange={({ target }) => {
                    console.log(target.value);
                    modalDispatch({
                      type: modalTypes.UPDATE_USERNAME,
                      payload: { username: target.value }
                    });
                  }}
                />
                <Input
                  required
                  value={state.password}
                  placeholder="Password"
                  onChange={({ target }) => {
                    modalDispatch({
                      type: modalTypes.UPDATE_PASSWORD,
                      payload: { password: target.value }
                    });
                  }}
                />
              </>
            ) : (
              <>
                <Input
                  required
                  value={state.user.cardNumber || ""}
                  placeholder="Card Number"
                  onChange={({ target }) => {
                    modalDispatch({
                      type: modalTypes.UPDATE_USER,
                      payload: { user: { cardNumber: target.value } }
                    });
                  }}
                />
                <Input
                  required
                  value={state.user.cardName || ""}
                  placeholder="Card holder"
                  onChange={({ target }) => {
                    modalDispatch({
                      type: modalTypes.UPDATE_USER,
                      payload: { user: { cardName: target.value } }
                    });
                  }}
                />
              </>
            )}
          </InputContainer>
          <ButtonsContainer>
            <Button backgroundColor={"gray"} onClick={handleClick}>
              cancel
            </Button>
            <Button type="submit" backgroundColor={"black"}>
              confirm
            </Button>
          </ButtonsContainer>
        </CheckoutForm>
      </Container>
    )
  );
};

export default Modal;
