import axios from "axios";

export const getOneProduct = async (id: number) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products/" + id);
    const result = await response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
