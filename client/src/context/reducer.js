const GET_ITEMS = "GET_ITEMS";
const DISPLAY_MODAL = "DISPLAY_MODAL";

export const types = { GET_ITEMS, DISPLAY_MODAL };

export const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: [...payload]
      };
    case DISPLAY_MODAL:
      return {
        ...state,
        displayModal: payload
      };
    default:
      return state;
  }
};
