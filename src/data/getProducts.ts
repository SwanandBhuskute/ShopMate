import { BASE_API } from "../utils/constants";
import { Product } from "../models/Products.model";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_API}/products`);
  const data = await response.json();
  return data.products as Product[];
};
