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
    this.children.SelectChat = this.createSelect(this.props);
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
        click: () => {
          const el = (((this.children.AddChat as this).children.Input as Block<Input>).element as HTMLInputElement);
          this.props.cb(el.value);
          el.value = '';
        },
      },
      text: 'Add chat',
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

  protected componentDidUpdate(
    oldProps: ChatControllerProps,
    newProps: ChatControllerProps,
  ): boolean {
    this.children.SelectChat = this.createSelect(newProps);
    return true;
  }

  private createSelect(props: ChatControllerProps) {
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
