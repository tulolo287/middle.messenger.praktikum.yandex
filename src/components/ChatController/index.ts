import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import { Button } from '../Button';
import { Input } from '../Input';
import { InputLabel } from '../InputLabel';
import { Select } from '../Select';
import { SelectLabel } from '../SelectLabel';
import './chat-controller.css';
import template from './chat-controller.hbs';

interface ChatControllerProps {
  cb: (chatName: string) => void;
  close: () => void;
}
class BaseChatController extends Block {
  constructor(props: ChatControllerProps) {
    super(props);
  }

  protected init(): void {
    this.props.show = false;
    this.children.AddChat = new InputLabel({
      errorText: 'Not empty',
      placeholder: 'chat name',
      required: true,
      type: 'text',
      value: '',
      label: { for: 'login', text: 'Chat name' },
      name: 'login',
    });

    this.children.SelectChat = this.createSelect();
    this.children.CancelButton = new Button({
      events: {
        click: () => {
          this.props.close();
        },
      },
      text: 'Cancel',
      type: 'button',
    });
    this.children.AddChatButton = new Button({
      events: {
        click: (e) => {
          e.preventDefault();
          const el = (((this.children.AddChat as this).children.Input as Block<Input>).element as HTMLInputElement);
          if (el.value === '') {
            alert('Please enter chat name');
            return;
          }
          ChatsController.create(el.value);
          el.value = '';
        },
      },
      text: 'Add chat',
      type: 'submit',
    });
    this.children.UpdateChatAvatarButton = new Button({
      events: {
        click: (e) => {
          e.preventDefault();
          const avatarEl = document.getElementById('chat_avatar') as HTMLInputElement;
          if (!avatarEl?.files![0]) {
            alert('Please select image');
            return;
          }
          const avatarData = new FormData();
          avatarData.append('avatar', avatarEl?.files![0]);
          const el = (((this.children.SelectChat as this).children.Select as Block<Select>).element as HTMLInputElement);
          avatarData.append('chatId', el.value);
          ChatsController.changeAvatar(avatarData);
        },
      },
      text: 'Update chat avatar',
      type: 'button',
    });
    this.children.DeleteChatButton = new Button({
      events: {
        click: () => {
          const el = (((this.children.SelectChat as this).children.Select as Block<Select>).element as HTMLInputElement);
          ChatsController.delete(
            Number(el.value),
          );
        },
      },
      text: 'Delete chat',
      type: 'button',
    });
  }

  protected componentDidUpdate(): boolean {
    this.children.SelectChat = this.createSelect();
    return true;
  }

  private createSelect() {
    if (this.props.chats) {
      return new SelectLabel({
        errorText: 'Not empty',
        placeholder: 'select chat',
        required: true,
        type: 'text',
        value: '',
        options: this.props.chats,
        label: { for: 'delete_chat', text: 'Select chat' },
        name: 'delete_chat',
      });
    } else {
      return [];
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));

export const ChatController = withChats(BaseChatController as typeof Block);
