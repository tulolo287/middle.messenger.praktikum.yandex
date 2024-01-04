import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';
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
          this.props.cb(this.children.AddChat.children.Input._element.value);
          this.children.AddChat.children.Input._element.value = '';
        },
      },
      text: 'Add chat',
      type: 'button',
    });
    this.children.DeleteChatButton = new Button({
      events: {
        click: () => {
          ChatsController.delete(
            this.children.SelectChat.children.Select._element.value,
          );
        },
      },
      text: 'Delete chat',
      type: 'button',
    });
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    this.children.SelectChat = this.createSelect(newProps);
    return true;
  }

  private createSelect(props: any) {
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

export const ChatController = withChats(BaseChatController);
