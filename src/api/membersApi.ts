import axiosClient from "./axiosClient";

const MembersApi = {
  getAll: () => {
    const url = "/members";
    return axiosClient.get(url);
  },
};
export default MembersApi;
