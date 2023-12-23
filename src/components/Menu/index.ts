import Block from '../../utils/Block';
import template from './menu.hbs';

export class Menu extends Block {
  constructor(props: Record<string, string>) {
    super(props);
  }

  protected init(): void {
    this.props.show = false;
    this.props.events = {
      click: (e: MouseEvent) => {
        e.preventDefault();
        console.log(e.target)
        this.props.show = !this.props.show;
        //this.setProps(this.props.show = true)
      }
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
