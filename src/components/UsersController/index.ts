import ChatsController from '../../controllers/ChatsController';
import { User } from '../../typings/data';
import Block from '../../utils/Block';
import store, { withStore } from '../../utils/Store';
import { Button } from '../Button';
import { Input } from '../Input';
import { InputLabel } from '../InputLabel';
import { Select } from '../Select';
import { SelectLabel } from '../SelectLabel';
import './users-controller.css';
import template from './users-controller.hbs';

interface UsersControllerProps {
  cb: (value: any) => void;
  close: () => void;
  content: any;
}
class BaseUsersController extends Block {
  constructor(props: UsersControllerProps) {
    super(props);
  }

  protected init(): void {
    this.props.show = false;
    this.children.AddUser = new InputLabel({
      errorText: 'Not empty, only 7-9 numbers',
      placeholder: 'user-id',
      required: true,
      type: 'number',
      value: '',
      label: { for: 'user_id', text: 'User id' },
      name: 'user_id',
    });
    this.children.SelectUser = this.createSelect();
    this.children.CancelButton = new Button({
      events: {
        click: () => {
          this.props.close();
        },
      },
      text: 'Cancel',
      type: 'button',
    });
    this.children.AddUserButton = new Button({
      events: {
        click: () => {
          const el = (((this.children.AddUser as this).children.Input as Block<Input>).element as HTMLInputElement);
          this.props.cb(el.value);
          el.value = '';
        },
      },
      text: 'Add user',
      type: 'submit',
    });
    this.children.DeleteUserButton = new Button({
      events: {
        click: () => {
          const el = (((this.children.SelectChat as this).children.Select as Block<Select>).element as HTMLInputElement);
          ChatsController.deleteChatUsers(
            store.getState().selectedChat,
            Number(el.value),
          );
        },
      },
      text: 'Delete user',
      type: 'submit',
    });
  }

  protected componentDidUpdate(): boolean {
    this.children.SelectUser = this.createSelect();
    return true;
  }

  private createSelect() {
    const users: User[] = this.props.chatUsers;
    const currentUser = this.props.user;
    if (users) {
      const usersSelect = users
        .filter((user) => user.id !== currentUser.id)
        .map((user) => {
          if (user.first_name) {
            return { ...user, title: user.first_name };
          }
          return;
        });
      return new SelectLabel({
        errorText: 'Not empty',
        placeholder: 'select user',
        required: true,
        type: 'text',
        value: '',
        options: usersSelect,
        label: { for: 'delete_user', text: 'Select user' },
        name: 'delete_user',
      });
    } else {
      return [];
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({
  chatUsers: [...(state.chatUsers || [])],
  user: state.user,
}));

export const UsersController = withChats(BaseUsersController as typeof Block);
