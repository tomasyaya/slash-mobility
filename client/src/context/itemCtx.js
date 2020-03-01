import React, { useReducer, useCallback } from "react";
import { rootReducer, types } from "./reducer";
import { getItems } from "../service/itemService";

export const itemContext = React.createContext();
const { Provider } = itemContext;

const initialState = {
  items: [],
  displayModal: false
};
const ItemCtx = ({ children }) => {
  const [store, dispatch] = useReducer(rootReducer, initialState);
  const getItemsAndDispatch = useCallback(async () => {
    try {
      const items = await getItems();
      dispatch({
        type: types.GET_ITEMS,
        payload: items.body
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <Provider value={{ store, getItemsAndDispatch, dispatch, types }}>
      {children}
    </Provider>
  );
};

export default ItemCtx;
