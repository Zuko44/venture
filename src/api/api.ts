import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=20",
    );
    const result = await response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: number) => {
  const response = await axios.delete(
    "https://fakestoreapi.com/products/" + id,
  );
  const result = await response.data;
  return result;
};
