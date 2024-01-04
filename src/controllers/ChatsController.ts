import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    this.fetchChats();
  }

  async fetchChats() {
    try {
      const chats = await this.api.read();

      chats.map(async (chat) => {
        const token = await this.getToken(chat.id);
        await MessagesController.connect(chat.id, token);
      });
      store.set('chats', chats);
    } catch (e) {
      console.log(e);
    }
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
    this.getChatUsers(id);
  }

  async getChatUsers(id: number) {
    try {
      const users = await this.api.getUsers(id);
      store.set('chatUsers', users);
    } catch (e) {
      console.error(e);
    }
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
  }

  async deleteChatUsers(id: number, userId: number) {
    await this.api.deleteUsers(id, [userId]);
    this.getChatUsers(id);
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;
