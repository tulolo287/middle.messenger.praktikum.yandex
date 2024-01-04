import ChatsController from '../../controllers/ChatsController';
import { ChatInfo } from '../../typings/data';
import Block from '../../utils/Block';
import store, { withStore } from '../../utils/Store';
import { ChatItem } from '../ChatItem';
import template from './chats.hbs';

interface ChatsProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

class ChatsBase extends Block<ChatsProps> {
  constructor(props: ChatsProps) {
    super({ ...props });
  }

  init() {
    this.children.ChatItems = this.createChats();
  }

  protected componentDidUpdate(): boolean {
    this.children.ChatItems = this.createChats();
    return true;
  }

  private createChats() {
    if (this.props.chats) {
      return this.props.chats.map(
        (chat) => new ChatItem({
          ...chat,
          active: chat.id === store.getState().selectedChat,
          events: {
            click: (e: Event) => {
              e.preventDefault();
              ChatsController.selectChat(chat.id);
              ChatsController.getChatUsers(chat.id);
            },
          },
        }),
      );
    } else {
      return [];
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));

export const Chats = withChats(ChatsBase as typeof Block);
