import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { ChatController } from '../../components/ChatController';
import { Chats } from '../../components/Chats';
import { Dialogs } from '../../components/Dialogs';
import { InputLabel } from '../../components/InputLabel';
import { Menu } from '../../components/Menu';
import { Users } from '../../components/Users';
import ChatsController from '../../controllers/ChatsController';
import MessagesController from '../../controllers/MessagesController';
import { messageInputs } from '../../data/message';
import { IInputLabel } from '../../typings/data';
import Block from '../../utils/Block';
import store, { withStore } from '../../utils/Store';
import { checkValidation } from '../../utils/validation';
import './chat.css';
import template from './chat.hbs';

interface ChatPageProps {
  title: string;
}
export class BaseChatPage extends Block {
  constructor(props: ChatPageProps) {
    super(props);
  }

  init() {
    this.children.Users = new Users({});
    this.children.ChatController = new ChatController({
      cb: (chatName: string) => {
        ChatsController.create(chatName);
      },
      close: () => {
        this.props.show = !this.props.show;
      },
    });
    this.props.show = false;
    this.children.AddChat = new Button({
      text: 'Chat Controller',
      type: 'button',
      events: {
        click: () => {
          this.props.show = !this.props.show;
        },
      },
    });
    this.children.Avatar = this.createAvatar(this.props);

    this.props.messageInputs = messageInputs;
    this.children.MessageInput = this.props.messageInputs.map(
      (input: IInputLabel) => new InputLabel({ ...input }),
    );
    this.children.Menu = new Menu({});

    this.children.Chats = new Chats({ isLoaded: false });

    ChatsController.fetchChats().finally(() => {
      (this.children.Chats as Block).setProps({ isLoaded: true });
    });

    this.children.Dialogs = new Dialogs({});
    this.children.Send = new Button({
      type: 'submit',
      text: 'Отправить >',
      events: {
        click: (e) => {
          e.preventDefault();
          const form = document.querySelector('form');
          if (form) {
            const formData = checkValidation(form);
            console.log(formData);
            if (formData) {
              form.reset();
              MessagesController.sendMessage(
                store.getState().selectedChat!,
                formData.message as string,
              );
            } else {
              alert('Invalid form');
            }
          }
        },
      },
    });
  }

  protected componentDidUpdate(
    oldProps: ChatPageProps,
    newProps: ChatPageProps,
  ): boolean {
    this.children.Avatar = this.createAvatar(newProps);
    return true;
  }

  private createAvatar(props: ChatPageProps) {
    return new Avatar({
      alt: 'фото-профиля',
      url: '/settings',
      src:
        `https://ya-praktikum.tech/api/v2/resources${this.props.profile?.avatar}`
        || 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({
  profile: state.user,
  avatar: state.avatar,
}));
export const ChatPage = withUser(BaseChatPage);
