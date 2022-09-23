interface IUser {
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

export type { IUser, ISelect, IRequestAPI, ILogAPI };
