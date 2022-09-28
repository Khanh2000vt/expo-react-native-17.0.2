export enum Social {
  YOUTUBE = "youtube",
  INSTAGRAM = "instagram",
  TWITTER = "twitter",
  FACEBOOK = "facebook",
  WHATSAPP = "whatsapp",
}

export const initialValues = {
  youtube: "",
  instagram: "",
  twitter: "",
  facebook: "",
  whatsapp: "",
  email: "",
  password: "",
  username: "",
  gender: "",
  birthYear: "",
  introductionCode: "",
};

export const arraySocialInput = [
  {
    title: "Youtube",
    type: Social.YOUTUBE,
  },
  {
    title: "Instagram",
    type: Social.INSTAGRAM,
  },
  {
    title: "Twitter",
    type: Social.TWITTER,
  },
  {
    title: "Facebook",
    type: Social.FACEBOOK,
  },
  {
    title: "Whatsapp",
    type: Social.WHATSAPP,
  },
];

enum Account {
  EMAIL = "email",
  PASSWORD = "password",
  USERNAME = "username",
}

export const arrayAccountInput = [
  {
    title: "Email",
    type: Account.EMAIL,
  },
  {
    title: "Password",
    type: Account.PASSWORD,
  },
  {
    title: "Username",
    type: Account.USERNAME,
  },
];
