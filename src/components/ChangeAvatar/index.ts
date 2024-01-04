import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import { Button } from '../Button';
import { Input } from '../Input';
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
          const avatar = document.getElementById('avatar') as HTMLInputElement;
          const formData = new FormData();
          formData.append('avatar', avatar!.files![0]);
          this.props.cb(formData);
          const el = (((this.children.ChangeAvatarInput as this).children.Input as Block<Input>).element as HTMLInputElement);
          el.value = '';
        },
      },
      text: 'Change Avatar',
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

export const ChangeAvatar = withChats(BaseChangeAvatar as typeof Block);
