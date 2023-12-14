import { TDialog } from '../../typings/data';
import Block from '../../utils/Block';
import { Menu } from '../Menu';
import template from './chat-dialog.hbs';

export class DialogItem extends Block {
  constructor(props: TDialog) {
    super(props);
  }

  init() {
    this.children.Menu = new Menu({});
  }
  render() {
    return this.compile(template, this.props);
  }
}
