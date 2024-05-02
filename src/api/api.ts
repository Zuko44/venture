import type { Product } from "../types/index";
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

export const saveNewProduct = async (product: Product) => {
  const response = await axios.post("https://fakestoreapi.com/products", {
    id: product.id,
    category: product.category,
    title: product.title,
    description: product.description,
    image: product.image,
    price: product.price,
    public: product.public,

    rate: product.rating.rate,
    count: product.rating.count,
    date: product.date,
  });
  const result = await response.data;
  return result;
};

export const deleteOneProduct = async (id: number) => {
  const response = await axios.delete(
    "https://fakestoreapi.com/products/" + id,
  );
  const result = await response.data;
  return result;
};
