import Block from '../../utils/Block';
import template from './404.hbs';

export class Page404 extends Block {
  constructor(props) {
    super('main', props);
  }
  

  render() {
    return this.compile(template, this.props);
  }
}
