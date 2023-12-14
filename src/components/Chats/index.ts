import data from '../../data';
import { IProfiles } from '../../typings/data';
import Block from '../../utils/Block';
import { ChatItem } from '../ChatItem';
import template from './chats.hbs';

interface IChatsProps {
  profiles: IProfiles[];
}
export class Chats extends Block {
  constructor(props: {}) {
    super(props);
  }

  init() {
    this.children.ChatItem = new ChatItem({
      profiles: data.profiles,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
