import axiosClient2th from "./axiosClient2";

const LogApi = {
  getAll: (params: any) => {
    const url = "/log";
    return axiosClient2th.get(url, { params });
  },
};
export default LogApi;
