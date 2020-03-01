import React from "react";

import Button from "../Button";
import { CardContainer, CardImage, CardPrice, CardTitle } from "./styles";

const ItemCard = ({
  name,
  price,
  image,
  buttonTxt,
  handleClick,
  buttonType
}) => (
  <CardContainer>
    <CardImage src={image} />
    <CardTitle>{name}</CardTitle>
    <CardPrice>{`$ ${price}`}</CardPrice>
    <Button backgroundColor={"black"} type={buttonType} onClick={handleClick}>
      {buttonTxt}
    </Button>
  </CardContainer>
);

export default ItemCard;
