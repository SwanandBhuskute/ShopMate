import { BASE_API } from "../utils/constants";
import { Product } from "../models/Products.model";

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${BASE_API}/products/${id}`);
  const data = await response.json();
  return data as Product;
};
