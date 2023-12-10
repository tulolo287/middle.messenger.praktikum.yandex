import Block from '../../utils/Block';
import template from './500.hbs';

export class Page500 extends Block {
  constructor(props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
