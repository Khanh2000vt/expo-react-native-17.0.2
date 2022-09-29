import { IRequestAPI } from "@model";
import axiosClient2th from "./axiosClient2";

const ForumApi = {
  getAll: (params: IRequestAPI) => {
    const url = "/forum";
    return axiosClient2th.get(url, { params });
  },

  getById: (id: number | string) => {
    const url = `/forum/${id}`;
    return axiosClient2th.get(url);
  },
  postNewPost: (params: IRequestAPI) => {
    const url = "/forum";
    return axiosClient2th.post(url, { ...params });
  },
};
export default ForumApi;
