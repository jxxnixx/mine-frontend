import axios from "axios";
const BASE_URL = "https://0bfabe7c-c087-4dcb-bf72-9ab5e3650b87.mock.pstmn.io";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
