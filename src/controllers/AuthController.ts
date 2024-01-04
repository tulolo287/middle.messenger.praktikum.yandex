import API, { AuthAPI, SignupData } from '../api/AuthAPI';
import { ROUTES } from '../data/consts';
import store from '../utils/Store';
// import store from '../utils/Store';
import Router from '../utils/Router';
import { setProfileInputs } from '../utils/helpers';
import MessagesController from './MessagesController';

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

      // Router.go('/profile');
    } catch (e: any) {
      if (e.reason === 'Login or password is incorrect') {
        alert('Wrong username or password');
      }
      console.error(e);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();
      Router.go(ROUTES.CHAT);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.read();
      if (user) {
        store.set('user', user);
        const profileInputs = setProfileInputs(user);
        store.set('profileInputs', profileInputs);
      } else {
        throw new Error('User not found');
      }
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async logout() {
    try {
      MessagesController.closeAll();
      await this.api.logout();
      Router.go(ROUTES.LOGIN);
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();