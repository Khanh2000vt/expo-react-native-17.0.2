import axiosClient from "./axiosClient";

const JoinedApi = {
  getAll: () => {
    const url = "/login";
    return axiosClient.get(url);
  },
  getById: (id: string) => {
    const url = "/login/" + id;
    return axiosClient.get(url);
  },
};
export default JoinedApi;
