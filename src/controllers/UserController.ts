import API, { UserAPI } from '../api/UserAPI.ts';
import AuthController from './AuthController.ts';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async changeProfile(profile: {}) {
    try {
      await this.api.changeProfile(profile);
      AuthController.fetchUser();
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async changeAvatar(avatar: FormData) {
    try {
      await this.api.updateAvatar(avatar);
      AuthController.fetchUser();
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new UserController();
