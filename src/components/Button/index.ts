import Block from '../../utils/Block';
import template from './button.hbs';

export class Button extends Block {
  constructor(props) {
    super('div', props);
  }

  init() {
    this.props.events = {};
  }

  render() {
    return this.compile(template, this.props);
  }
}
