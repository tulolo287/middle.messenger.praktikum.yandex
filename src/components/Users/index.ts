import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import store, { withStore } from '../../utils/Store';
import { checkValidation } from '../../utils/validation';
import { Button } from '../Button';
import { UsersController } from '../UsersController';
import { UserItem } from '../UserItem';
import './users.css';
import template from './users.hbs';
import { User } from '../../typings/data';

interface IAvatarProps {
  class?: string;
  alt: string;
  url?: string;
  src: string;
}

export class BaseUsers extends Block {
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
          alert("Mustn't be empty");
          return;
        }
        if (this.props.chatUsers.find((user) => user.id.toString() === value)) {
          alert('User already exists');
          return;
        }
        if (form && value) {
          const formData = checkValidation(form);
          if (formData) {
            ChatsController.addUserToChat(this.props.selectedChat, value);
          } else {
            alert('Invalid form');
          }
        }
      },
    });

    this.children.Users = this.getUsers(this.props);

    this.children.AddUser = new Button({
      events: {
        click: (e) => {
          e.preventDefault();
          if (store.getState().selectedChat) {
            this.props.show = !this.props.show;
          } else {
            alert('Please select chat');
          }
        },
      },
      text: 'Users Controller',
      type: 'button',
    });
  }

  protected componentDidUpdate(
    oldProps: IAvatarProps,
    newProps: IAvatarProps,
  ): boolean {
    this.children.Users = this.getUsers(newProps);
    return true;
  }

  private getUsers(props: IAvatarProps) {
    const users: User[] = this.props.chatUsers;
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
export const Users = withChatUsers(BaseUsers);
