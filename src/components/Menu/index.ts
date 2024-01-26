import Block from '../../utils/Block.ts';
import template from './menu.hbs';
import './menu.css';

export class Menu extends Block {
  constructor(props: Record<string, string>) {
    super(props);
  }

  protected init(): void {
    this.props.show = false;
    this.props.events = {
      click: (e: MouseEvent) => {
        e.preventDefault();
        this.props.show = !this.props.show;
      },
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
