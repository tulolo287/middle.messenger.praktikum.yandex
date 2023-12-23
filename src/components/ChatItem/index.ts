import { IProfileChat } from '../../typings/data';
import Block from '../../utils/Block';
import { Avatar } from '../Avatar';
import template from './chat-item.hbs';

interface IChatItemProps {
  profile: IProfileChat;
}
export class ChatItem extends Block {
  constructor(props: IChatItemProps) {
    super(props);
  }

  protected init(): void {
    this.children.Avatar = new Avatar({ ...this.props.profile.avatar, class: 'chat-item__info__img' });
  }

  render() {
    return this.compile(template, this.props);
  }
}
