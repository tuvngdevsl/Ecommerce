import axios from "axios";
import { base_url } from "utils/base_url";

const userToken = localStorage.getItem("user");
const getTokenFromLocalStorage = userToken ? JSON.parse(userToken) : null;

const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
    Accept: "application/json"
  }
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/get-orders`, config);
  return response.data.data;
};

const orderService = {
  getOrders
};

export default orderService;
