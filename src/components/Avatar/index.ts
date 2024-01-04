import Block from '../../utils/Block';
import Router from '../../utils/Router';
import './avatar.css';
import template from './avatar.hbs';

interface IAvatarProps {
  class?: string;
  alt: string;
  url?: string;
  src: string;
  cb?: () => void;
}

export class Avatar extends Block {
  constructor(props: IAvatarProps) {
    super(props);
  }

  protected init(): void {
    this.props.show = false;
    this.props.events = {
      click: (e: Event) => {
        e.preventDefault();
        if (this.props.url) {
          Router.go(this.props.url);
        } else {
          this.props.cb();
        }
      },
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
