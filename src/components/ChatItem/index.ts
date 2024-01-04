import Block from '../../utils/Block';
import { Menu } from '../Menu';
import './chat-item.css';
import template from './chat-item.hbs';

interface ChatItemProps {
  title: string;
  active: boolean;
  events?: { click: (e: Event) => void };
}
export class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super(props);
  }

  protected init(): void {
    this.children.Menu = new Menu({});
    if (this.props.last_message) {
      const date = new Date(this.props.last_message.time);
      this.props.time = `${date.getHours()}:${date.getMinutes()}`;
    }
    this.props.unread_count = this.props.unread_count === 0 ? null : this.props.unread_count;
  }

  render() {
    return this.compile(template, this.props);
  }
}
