import Block from '../../utils/Block.ts';
import template from './input.hbs';

export class Select extends Block {
  constructor(props: Record<string, any>) {
    super(props);
  }

  init() {
    this.props.events = {};
  }

  render() {
    return this.compile(template, this.props);
  }
}
