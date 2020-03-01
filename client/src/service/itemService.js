import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const getItems = async () => {
  try {
    const { data: items } = await api.get("/items");
    return items;
  } catch (e) {
    console.log(e);
  }
};
