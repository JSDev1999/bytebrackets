import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
const token = JSON.parse(localStorage.getItem("user"));

const newToken = token;

const headers = newToken
  ? { ...DEFAULT_HEADERS, Authorization: `Bearer ${newToken}` }
  : { ...DEFAULT_HEADERS };

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: headers,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosClient;
