export interface IPage {
  name: string;
  url: string;
}

export interface IProfile {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  title?: string | undefined;
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
  };
}

export interface IInput {
  type: string;
  name: string;
  required: boolean;
  placeholder: string;
  errorText: string;
}

export interface IInputLabel {
  label?: { for: string; text: string };
  type: string;
  name: string;
  required: boolean;
  placeholder: string;
  errorText: string;
  value?: any;
  accept?: string;
}

export interface ISelectLabel {
  label: { for: string; text: string };
  type: string;
  name: string;
  required: boolean;
  placeholder: string;
  errorText: string;
  value?: any;
  options?: any;
}

export interface ChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  };
}

export interface IDialog {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}
