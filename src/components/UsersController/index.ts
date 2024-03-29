import ChatsController from '../../controllers/ChatsController.ts';
import { User } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import store, { withStore } from '../../utils/Store.ts';
import { Button } from '../Button/index.ts';
import { Input } from '../Input/index.ts';
import { InputLabel } from '../InputLabel/index.ts';
import { Select } from '../Select/index.ts';
import { SelectLabel } from '../SelectLabel/index.ts';
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
      errorText: 'Идентификатор пользователя цифрами',
      placeholder: 'user-id',
      required: true,
      type: 'number',
      value: '',
      label: { for: 'user_id', text: 'Идентификатор пользователя' },
      name: 'user_id',
    });
    this.children.SelectUser = this.createSelect();
    this.children.CancelButton = new Button({
      events: {
        click: () => {
          this.props.close();
        },
      },
      text: 'Отмена',
      type: 'button',
    });
    this.children.AddUserButton = new Button({
      events: {
        click: () => {
          const el = (
            (this.children.AddUser as this).children.Input as Block<Input>
          ).element as HTMLInputElement;
          this.props.cb(el.value);
          el.value = '';
        },
      },
      text: 'Добавить пользователя',
      type: 'submit',
    });
    this.children.DeleteUserButton = new Button({
      events: {
        click: () => {
          const el = (
            (this.children.SelectUser as this).children.Select as Block<Select>
          ).element as HTMLInputElement;
          ChatsController.deleteChatUsers(
            store.getState().selectedChat!,
            Number(el.value),
          );
        },
      },
      text: 'Удалить пользователя',
      type: 'button',
    });
  }

  protected componentDidUpdate(): boolean {
    this.children.SelectUser = this.createSelect();
    return true;
  }

  private createSelect() {
    const users: User[] = this.props.chatUsers;
    const currentUser = this.props.user;
    const usersSelect = users
      .filter((user) => user.id !== currentUser.id)
      .map((user) => ({ ...user, title: user.first_name ? user.first_name : 'No name user' }));
    return new SelectLabel({
      placeholder: 'select-user',
      required: true,
      type: 'text',
      value: '',
      options: usersSelect,
      label: { for: 'delete_user', text: 'Выберите пользователя' },
      name: 'delete_user',
    });
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
