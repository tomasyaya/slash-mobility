const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_USER = "UPDATE_USER";
const CLEAN_CREDENTIALS = "CLEAN_CREDENTIALS";

export const modalTypes = {
  UPDATE_PASSWORD,
  UPDATE_USER,
  UPDATE_USERNAME
};

export const modalReducer = (state, { type, payload }) => {
  console.log("update user", type);
  switch (type) {
    case UPDATE_PASSWORD:
      return {
        ...state,
        ...payload
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        ...payload
      };
    case UPDATE_USER:
      return {
        ...state,
        ...payload
      };
    case CLEAN_CREDENTIALS:
      return {
        ...state,
        password: "",
        username: ""
      };
    default:
      return {
        ...state
      };
  }
};
