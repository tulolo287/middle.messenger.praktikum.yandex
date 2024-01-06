import ChatsController from '../../controllers/ChatsController';
import { User } from '../../typings/data';
import Block from '../../utils/Block';
import store, { withStore } from '../../utils/Store';
import { checkValidation } from '../../utils/validation';
import { Button } from '../Button';
import { UserItem } from '../UserItem';
import { UsersController } from '../UsersController';
import './users.css';
import template from './users.hbs';

interface IAvatarProps {
  class?: string;
  alt: string;
  url?: string;
  src: string;
  chatUsers?: User[];
  selectedChat: number;
  show: boolean;
}

export class BaseUsers extends Block<IAvatarProps> {
  constructor(props: IAvatarProps) {
    super(props);
  }

  protected init(): void {
    this.props.show = false;
    this.children.UsersController = new UsersController({
      close: () => {
        this.props.show = false;
      },
      cb: (value: any) => {
        const form = document.querySelector('form');
        if (value === '') {
          alert('Пожалуйста введите идентификатор пользователя');
          return;
        }
        if (this.props.chatUsers?.find((user) => user.id.toString() === value)) {
          alert('Пользователь уже существует');
          return;
        }
        if (form && value) {
          const formData = checkValidation(form);
          if (formData) {
            ChatsController.addUserToChat(this.props.selectedChat, value);
          } else {
            alert('Неверно заполненная форма');
          }
        }
      },
    });

    this.children.Users = this.getUsers();

    this.children.AddUser = new Button({
      events: {
        click: (e) => {
          e.preventDefault();
          if (store.getState().selectedChat) {
            this.props.show = !this.props.show;
          } else {
            alert('Пожалуйста выберите чат');
          }
        },
      },
      text: 'Управление пользователями',
      type: 'button',
    });
  }

  protected componentDidUpdate(): boolean {
    this.children.Users = this.getUsers();
    return true;
  }

  private getUsers() {
    const users: User[] | undefined = this.props.chatUsers;
    if (users) {
      return users.map((user) => new UserItem({ ...user }));
    } else {
      return [];
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withChatUsers = withStore((state) => ({
  chatUsers: [...(state.chatUsers || [])],
  selectedChat: state.selectedChat,
}));
export const Users = withChatUsers(BaseUsers as typeof Block);
