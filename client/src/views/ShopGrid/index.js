import React, { useEffect, useContext } from "react";
import ItemCard from "../../components/ItemCard";
import { Grid } from "./styles";
import { itemContext } from "../../context/itemCtx";

const ShopGrid = () => {
  const { store, getItemsAndDispatch, dispatch, types } = useContext(
    itemContext
  );
  const displayItems = store.items.map(item => (
    <ItemCard
      buttonTxt="Buy"
      buttonType="button"
      key={item.id}
      handleClick={() =>
        dispatch({ type: types.DISPLAY_MODAL, payload: !store.displayModal })
      }
      {...item}
    />
  ));
  useEffect(() => {
    getItemsAndDispatch();
  }, [getItemsAndDispatch]);
  return <Grid>{store.items.length ? displayItems : <h2>No Content</h2>}</Grid>;
};

export default ShopGrid;
