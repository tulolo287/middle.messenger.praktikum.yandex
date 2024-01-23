import BaseAPI from './BaseAPI';

export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
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
}

export class AuthAPI extends BaseAPI {
  public create?(): Promise<unknown> {
    throw new Error('Method not implemented.');
  }

  public update?(): Promise<unknown> {
    throw new Error('Method not implemented.');
  }

  public delete?(): Promise<unknown> {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super('/auth');
  }

  signin(data: Record<string, FormDataEntryValue>): Promise<Response> {
    return this.http.post('/signin', data);
  }

  signup(data: Record<string, FormDataEntryValue>) {
    return this.http.post('/signup', data);
  }

  read(): Promise<User> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }
}

export default new AuthAPI();
