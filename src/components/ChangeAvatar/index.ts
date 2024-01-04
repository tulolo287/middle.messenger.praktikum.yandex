import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import store, { withStore } from '../../utils/Store';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';
import './change-avatar.css';
import template from './change-avatar.hbs';

interface ChangeAvatarProps {
  cb: (value: any) => void;
  close: () => void;
}
class BaseChangeAvatar extends Block {
  constructor(props: ChangeAvatarProps) {
    super(props);
  }

  protected init(): void {
    this.props.show = false;
    this.children.ChangeAvatarInput = new InputLabel({
      errorText: 'Choose Avatar',
      placeholder: 'avatar',
      required: true,
      type: 'file',
      label: { for: 'avatar', text: 'Avatar file' },
      name: 'avatar',
      accept: 'image/*',
    });

    this.children.CancelButton = new Button({
      events: {
        click: () => {
          this.props.close();
        },
      },
      text: 'Cancel',
      type: 'button',
    });
    this.children.ChangeAvatarButton = new Button({
      events: {
        click: (e: Event) => {
          e.preventDefault();
          const avatar = document.getElementById('avatar');
          const formData = new FormData();

          formData.append('avatar', avatar.files[0]);
          console.log(formData);
          this.props.cb(formData);
          this.children.ChangeAvatarInput.children.Input._element.value = '';
        },
      },
      text: 'Change Avatar',
      type: 'submit',
    });
    this.children.DeleteUserButton = new Button({
      events: {
        click: () => {
          ChatsController.deleteChatUsers(
            store.getState().selectedChat,
            this.children.SelectUser.children.Select._element.value,
          );
        },
      },
      text: 'Delete user',
      type: 'submit',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({
  user: state.user,
}));

export const ChangeAvatar = withChats(BaseChangeAvatar);
