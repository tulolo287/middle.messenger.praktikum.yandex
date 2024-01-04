import Block from '../../utils/Block';
import './user-item.css';
import template from './user-item.hbs';

interface UserItemProps {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  title?: string | undefined;
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
