import Block from '../../utils/Block';
import './overlay-bg.css';
import template from './overlayBG.hbs';

export class OverlayBG extends Block {
  constructor(props: Record<string, string>) {
    super(props);
  }

  protected init(): void {
    this.props.show = false;
    // this.setProps(this.props.show = true);
    this.props.events = {
      click: (e: MouseEvent) => {
        e.preventDefault();
        this.setProps((this.props.show = false));
      },
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
