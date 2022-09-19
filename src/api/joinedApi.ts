import axiosClient from "./axiosClient";

const JoinedApi = {
  getAll: () => {
    const url = "/joined";
    return axiosClient.get(url);
  },
};
export default JoinedApi;
