import axios from "axios";

export const getAllProducts = async (num?: number) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=" + num,
    );
    const result = await response.data;
    return result;
  } catch (error) {
    console.log(error.toJSON());
  }
};
