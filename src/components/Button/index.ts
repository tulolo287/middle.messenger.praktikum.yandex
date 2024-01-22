import Block from '../../utils/Block.ts';
import template from './button.hbs';

interface IButton {
  class?: string;
  type: string;
  text: string;
  events: { click: (e: Event) => void };
}

export class Button extends Block {
  constructor(props: IButton) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
