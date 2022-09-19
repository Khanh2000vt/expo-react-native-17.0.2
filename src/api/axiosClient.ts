import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://6316f6fdcb0d40bc4148114b.mockapi.io/khanhmacro/api",
  // headers: {
  //   "content-type": "application/json",
  // },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    console.log("error axiosClient: ", error);
    throw error;
  }
);
export default axiosClient;
