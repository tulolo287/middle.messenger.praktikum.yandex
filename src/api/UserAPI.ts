import BaseAPI from './BaseAPI';

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  public create?(data: unknown): Promise<unknown> {
    throw new Error('Method not implemented.');
  }

  public read?(identifier?: string | number | undefined): Promise<unknown> {
    throw new Error('Method not implemented.');
  }

  public update?(identifier: string | number, data: unknown): Promise<unknown> {
    throw new Error('Method not implemented.');
  }

  public delete?(identifier: string | number): Promise<unknown> {
    throw new Error('Method not implemented.');
  }

  updateAvatar(avatar: FormData) {
    return this.http.put('/profile/avatar', avatar);
  }

  changeProfile(profile: {}) {
    return this.http.put('/profile', profile);
  }
}

export default new UserAPI();
