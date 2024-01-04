import API, { UserAPI } from '../api/UserAPI';
import AuthController from './AuthController';

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
      throw new Error(e.message);
    }
  }

  async changeAvatar(avatar: FormData) {
    try {
      await this.api.updateAvatar(avatar);
      AuthController.fetchUser();
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export default new UserController();
