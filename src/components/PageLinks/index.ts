import { pages } from '../../data/pages.ts';
import Block from '../../utils/Block.ts';
import { Link } from '../Link/index.ts';
import template from './page-links.hbs';

interface IPageLinks {
  text: string;
  url: string;
}

export class PageLinks extends Block {
  constructor(props: {}) {
    super(props);
  }

  init() {
    this.props.pages = pages;
    this.children.Links = this.props.pages.map(
      (page: IPageLinks) => new Link({
        ...page,
      }),
    );
  }

  render() {
    return this.compile(template, this.props);
  }
}
