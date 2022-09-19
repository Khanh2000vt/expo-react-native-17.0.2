import axiosClient2th from "./axiosClient2";

const ForumApi = {
  getAll: (params: any) => {
    const url = "/forum";
    return axiosClient2th.get(url, { params });
  },

  getById: (id: number | string) => {
    const url = `/forum/${id}`;
    return axiosClient2th.get(url);
  },
  postNewPost: (params: any) => {
    const url = "/forum";
    return axiosClient2th.post(url, { ...params });
  },
};
export default ForumApi;
