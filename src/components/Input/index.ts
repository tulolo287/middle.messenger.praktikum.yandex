import Block from '../../utils/Block';
import template from './input.hbs';

export class Input extends Block {
  constructor(props) {
    super('div', props);
  }

  init() {
    this.props.events = {
      blur: () => {
        console.log('blur');
      },
    };
  }
  render() {
    return this.compile(template, this.props);
  }
}
