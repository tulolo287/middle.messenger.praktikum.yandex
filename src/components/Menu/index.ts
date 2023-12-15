import Block from '../../utils/Block';
import template from './menu.hbs';

export class Menu extends Block {
  constructor(props: Record<string, string>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
