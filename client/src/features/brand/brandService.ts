import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "utils/axiosConfig";

const getBrands = async () => {
  const response = await axios.get(`${base_url}brand`);
  return response.data.data;
};

const createBrand = async (data: any) => {
  const response = await axios.post(`${base_url}brand`, data, config);
  return response.data.data;
};

const brandService = { getBrands, createBrand };

export default brandService;
