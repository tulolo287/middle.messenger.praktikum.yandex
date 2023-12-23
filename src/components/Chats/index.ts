import { profiles } from '../../data/profiles';
import Block from '../../utils/Block';
import { ChatItem } from '../ChatItem';
import template from './chats.hbs';

export class Chats extends Block {
  constructor(props: {}) {
    super(props);
  }

  init() {
    this.children.ChatItems = profiles.map((profile) => new ChatItem({
      profile,
    }));
  }

  render() {
    return this.compile(template, this.props);
  }
}
