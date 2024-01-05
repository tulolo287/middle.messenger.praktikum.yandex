import Block from '../../utils/Block';
import Router from '../../utils/Router';
import template from './link.hbs';

interface ILinkProps {
  url?: string;
  text: string;
  class?: string;
}

export class Link extends Block {
  constructor(props: ILinkProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: (e: Event) => {
        e.preventDefault();
        if (this.props.url) {
          Router.go(this.props.url);
        } else {
          Router.back(-2);
        }
      },
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
