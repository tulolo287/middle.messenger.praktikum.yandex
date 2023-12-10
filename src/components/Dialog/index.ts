import Block from '../../utils/Block';
import template from './chat-dialog.hbs';

export class Dialog extends Block {
  constructor(props) {
    super('div', props, 'dialogs__item');
  }

  render() {
    return this.compile(template, this.props);
  }
}
