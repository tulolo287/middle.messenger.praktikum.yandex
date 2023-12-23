import Block from '../../utils/Block';
import { render } from '../../utils/render';
import template from './avatar.hbs';

interface IAvatarProps {
  class?: string;
  alt: string;
  url: string;
  src: string;
}

export class Avatar extends Block {
  constructor(props: IAvatarProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: (e: Event) => {
        e.preventDefault();
        render(this.props.url);
      },
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
