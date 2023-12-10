import Block from '../../utils/Block';
import { render } from '../../utils/render';
import template from './link.hbs';

export class Link extends Block {
  constructor(props) {
    super('div', props);
    console.log(props);
  }

  protected init(): void {
    this.props.events = {
      click: (e) => {
        e.preventDefault();
        render(this.props.url);
      }
    }
  }
  render() {
    return this.compile(template, this.props);
  }
}
