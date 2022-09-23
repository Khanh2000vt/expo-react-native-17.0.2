import axios from "axios";
import queryString from "query-string";

const axiosClient2th = axios.create({
  baseURL: "https://631fe0a5e3bdd81d8eeeacf8.mockapi.io",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient2th.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient2th.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log("error axiosClient2th: ", error);
    throw error;
  }
);
export default axiosClient2th;
