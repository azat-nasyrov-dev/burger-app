import axios from "axios";

const axiosOrders = axios.create({
  baseURL: 'https://burger-app-e5e84-default-rtdb.firebaseio.com/'
});

export default axiosOrders;