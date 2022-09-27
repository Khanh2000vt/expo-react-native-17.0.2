import { ApprovalApi } from "@api";
import { IApprovalAPI } from "@model";

export const handleRemoveById = (itemRemove: any, list: any[]) => {
  return list.filter((item) => item.id !== itemRemove.id);
};

export async function getListUser(
  setUsers: React.Dispatch<React.SetStateAction<IApprovalAPI[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const res: any = await ApprovalApi.getAll();
    setUsers([...res]);
  } catch (e) {
  } finally {
    setIsLoading(false);
  }
}
