import axiosClient2th from "./axiosClient2";

const ApprovalApi = {
  getAll: () => {
    const url = "/approval";
    return axiosClient2th.get(url);
  },
};
export default ApprovalApi;
