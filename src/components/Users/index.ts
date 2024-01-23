import ChatsController from '../../controllers/ChatsController.ts';
import { User } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import store, { withStore } from '../../utils/Store.ts';
import { checkValidation } from '../../utils/validation.ts';
import { Button } from '../Button/index.ts';
import { UserItem } from '../UserItem/index.ts';
import { UsersController } from '../UsersController/index.ts';
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
