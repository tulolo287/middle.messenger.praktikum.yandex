import { IProfiles } from '../../typings/data';
import Block from '../../utils/Block';
import template from './chat-item.hbs';

interface IChatItemProps {
  profiles: IProfiles[];
}
export class ChatItem extends Block {
  constructor(props: IChatItemProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
