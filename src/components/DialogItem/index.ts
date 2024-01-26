import { IDialog } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import { Menu } from '../Menu/index.ts';
import template from './chat-dialog.hbs';

export class DialogItem extends Block {
  constructor(props: IDialog) {
    super(props);
  }

  init() {
    this.children.Menu = new Menu({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
