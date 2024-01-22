import axios from "axios";
import { config } from "utils/axiosConfig";
import { base_url } from "utils/base_url";

const uploadImg = async (data: any) => {
  const response = await axios.post(`${base_url}upload`, data, config);
  console.log(response);
  return response.data;
};

const uploadService = {
  uploadImg
};

export default uploadService;
