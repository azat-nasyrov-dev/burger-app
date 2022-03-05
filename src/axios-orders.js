import axios from "axios";

const axiosOrders = axios.create({
  baseURL: 'https://burger-app-b08f2-default-rtdb.firebaseio.com/'
});

export default axiosOrders;