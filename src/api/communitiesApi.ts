import axiosClient from "./axiosClient";

const CommunitiesApi = {
  getAll: () => {
    const url = "/communities";
    return axiosClient.get(url);
  },
  getParams: (params: any) => {
    const url = "/communities";
    return axiosClient.get(url, { params });
  },
};
export default CommunitiesApi;
