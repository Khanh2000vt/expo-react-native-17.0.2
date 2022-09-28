import * as ImagePicker from "expo-image-picker";
export type IImage = ImagePicker.ImageInfo;

export interface IUserID {
  id_user: string;
}

export interface ICommunityID {
  id_community: string;
}

export interface IUserComment {
  id_user: string;
  comment: string;
  createdAt: string;
}

interface IApproval {
  createdAt: string;
  id_user: string;
}

interface IPerson {
  id: string;
  name: string;
  avatar: string;
  introduction: string;
  short_introduction: string;
  crown: number;
  coin: number;
  gender: boolean;
  birth_year: number;
  id_account: number;
  block: IUserID[];
  request: IUserID[];
  approval: IApproval[];
  token: string;
}

interface IUserAPI extends IPerson {
  friend: IUserID[];
}

interface IMemberAPI extends IPerson {
  friend: number;
}

interface ICommunityAPI {
  id: string;
  name: string;
  avatar: string;
  members: IUserID[];
}

interface IForumAPI {
  id: string;
  id_user: string;
  createdAt: string;
  title: string;
  body: string;
  image: string;
}

interface ILikeAPI {
  id: string;
  id_post: string;
  data: IUserID[];
}

interface IReplyAPI {
  id: string;
  id_post: string;
  data: IUserComment[];
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

export type {
  IUserAPI,
  ISelect,
  IRequestAPI,
  ILogAPI,
  ICommunityAPI,
  IForumAPI,
  ILikeAPI,
  IReplyAPI,
  IMemberAPI,
};
