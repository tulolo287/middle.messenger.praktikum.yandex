import data from '../../data';
import Block from '../../utils/Block';
import { Link } from '../Link';
import template from './page-links.hbs';

interface IPageLinks {
  text: string;
  url: string;
}

export class PageLinks extends Block {
  constructor(props: IPageLinks) {
    super(props);
  }

  init() {
    this.props.pages = data.pages;
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
