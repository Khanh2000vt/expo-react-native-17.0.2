import * as ImagePicker from "expo-image-picker";
export type IImage = ImagePicker.ImageInfo;
interface IUserAPI {
  token: string;
  name: string;
  user_id: number;
  friend: number;
  crown: number;
  coin: number;
  introduction: string;
  avatar: string;
  username: string;
  birthYear: number;
  gender: boolean;
  id: string;
  createdAt?: string;
}

interface IMemberAPI {
  id: string;
  name: string;
  gender: boolean;
  friend: number;
  introduce: string;
  age: number;
  user_id: number;
  introduction: string;
}

interface IApprovalAPI {
  createdAt: string;
  name: string;
  avatar: string;
  friend: number;
  introduction: string;
  id_account: number;
  id: string;
}

interface ISelect {
  label: string;
  value: string;
}

interface IRequestAPI {
  l: string | number;
  p: string | number;
}
interface ILogAPI {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  comment: string;
  seen: boolean;
}

interface ICommunityAPI {
  title: string;
  image_url: string;
  members: number;
  id: string;
}

interface IForumAPI {
  createdAt: string;
  name: string;
  avatar: string;
  title: string;
  body: string;
  likes: number;
  replies: number;
  image: string;
  id: string;
}

export type {
  IUserAPI,
  ISelect,
  IRequestAPI,
  ILogAPI,
  ICommunityAPI,
  IMemberAPI,
  IApprovalAPI,
  IForumAPI,
};
