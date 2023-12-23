export interface IPage {
  name: string;
  url: string;
}

export interface IProfile {
  email: string;
  login: string;
  name: string;
  surname: string;
  nic: string;
  phone: string;
  avatar: {}
}

export interface IProfileChat {
  id: number;
  username: string;
  active: boolean;
  color: string;
  text: string;
  avatar: {
    src: string;
    url: string;
    alt: string;
  }
}

export type TDialog = Omit<IProfiles, 'active'>;

export interface IInputLabel {
  label: { for: string; text: string };
  type: string;
  name: string;
  required: boolean;
  placeholder: string;
  errorText: string;
}
