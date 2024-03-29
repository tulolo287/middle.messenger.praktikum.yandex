import API, { AuthAPI } from '../api/AuthAPI.ts';
import { ROUTES } from '../data/consts.ts';
import Router from '../utils/Router.ts';
import store from '../utils/Store.ts';
import { setProfileInputs } from '../utils/helpers.ts';
import MessagesController from './MessagesController.ts';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: Record<string, FormDataEntryValue>) {
    try {
      await this.api.signin(data);
      await this.fetchUser();

      Router.go(ROUTES.CHAT);
    } catch (e: any) {
      if (e.reason === 'Login or password is incorrect') {
        alert('Wrong username or password');
      }
    }
  }

  async signup(data: Record<string, FormDataEntryValue>) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      Router.go(ROUTES.CHAT);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('user', user);
    const profileInputs = setProfileInputs(user);
    store.set('profileInputs', profileInputs);
  }

  async logout() {
    try {
      MessagesController.closeAll();
      await this.api.logout();
      store.clearStore();
      Router.go(ROUTES.LOGIN);
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
