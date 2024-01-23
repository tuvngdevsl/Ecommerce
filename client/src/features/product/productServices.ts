import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  return response.data.data;
};

const createProduct = async (product: any) => {
  const response = await axios.post(`${base_url}product/`, product, config);
  return response.data;
};

const productService = {
  getProducts,
  createProduct
};

export default productService;
