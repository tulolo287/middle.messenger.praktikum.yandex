import Block from '../../utils/Block';
import './user-item.css';
import template from './user-item.hbs';

interface UserItemProps {
  title: string;
  events?: { click: (e: Event) => void };
}
export class UserItem extends Block {
  constructor(props: UserItemProps) {
    super(props);
  }

  protected init(): void {}

  render() {
    return this.compile(template, this.props);
  }
}
