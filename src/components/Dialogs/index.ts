import data from '../../data';
import Block from '../../utils/Block';
import { Dialog } from '../Dialog';
import template from './dialogs.hbs';

export class Dialogs extends Block {
  constructor(props) {
    super('div', props);
  }

  init() {
    this.children.Dialog = new Dialog({
      dialogs: data.dialogs,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
